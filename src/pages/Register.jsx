import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import './Register.css';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const Register = () => {
    const location = useLocation();
    const [previews, setPreviews] = useState({});
    const [selectedCourse, setSelectedCourse] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [receiptUrl, setReceiptUrl] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const course = params.get('course');
        if (course) {
            setSelectedCourse(course);
        }
    }, [location]);

    // Generic file handler for all inputs including profile photo
    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => ({
                    ...prev,
                    [fieldName]: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Upload a single file to Supabase Storage and return the public URL
    const uploadFile = async (file, folder) => {
        const timestamp = Date.now();
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const filePath = `${folder}/${timestamp}_${safeName}`;

        const { error } = await supabase.storage
            .from('registrations')
            .upload(filePath, file, { upsert: true });

        if (error) {
            console.error(`Upload error for ${file.name}:`, error);
            return null;
        }

        const { data: urlData } = supabase.storage
            .from('registrations')
            .getPublicUrl(filePath);

        return urlData?.publicUrl || null;
    };

    // Load Razorpay SDK
    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: 'info', message: 'Processing your registration...' });

        if (!supabase) {
            setSubmitStatus({ type: 'error', message: 'System Error: Database connection failed.' });
            setIsSubmitting(false);
            return;
        }

        try {
            // 1. Collect text data from form
            const formData = new FormData(e.target);
            const cleanData = {};
            const fieldNames = [
                'selected_program', 'full_name', 'father_name', 'dob',
                'mobile', 'email', 'education', 'address', 'state',
                'city', 'district', 'pincode', 'aadhar_number',
                'license_number', 'license_category', 'license_authority',
                'license_issue_date', 'license_expiry_date', 'place'
            ];

            for (const field of fieldNames) {
                const val = formData.get(field);
                if (val && typeof val === 'string' && val.trim() !== '') {
                    cleanData[field] = val.trim();
                }
            }

            if (!cleanData.selected_program) {
                cleanData.selected_program = selectedCourse;
            }

            // 2. Upload all document images to Supabase Storage
            setSubmitStatus({ type: 'info', message: 'Uploading documents...' });

            const fileFields = [
                { name: 'photo', urlKey: 'photo_url' },
                { name: 'aadhar_front', urlKey: 'aadhar_front_url' },
                { name: 'aadhar_back', urlKey: 'aadhar_back_url' },
                { name: 'license_front', urlKey: 'license_front_url' },
                { name: 'license_back', urlKey: 'license_back_url' },
            ];

            const uploadPromises = fileFields.map(async ({ name, urlKey }) => {
                const file = formData.get(name);
                if (file && file instanceof File && file.size > 0) {
                    const url = await uploadFile(file, name);
                    if (url) cleanData[urlKey] = url;
                }
            });

            await Promise.all(uploadPromises);
            console.log('Uploads complete');

            // 3. Create Razorpay Order
            setSubmitStatus({ type: 'info', message: 'Initiating Secure Payment...' });

            const isLoaded = await loadRazorpay();
            if (!isLoaded) {
                throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
            }

            const orderResponse = await fetch(`${SUPABASE_URL}/functions/v1/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    action: 'create_order',
                    course_name: cleanData.selected_program
                })
            });

            const orderData = await orderResponse.json();
            if (!orderResponse.ok) throw new Error(orderData.error || 'Failed to initiate payment');

            // 4. Open Razorpay Checkout
            const options = {
                key: orderData.key_id,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "ITDC Punjab",
                description: `Enrollment Fee: ${cleanData.selected_program}`,
                order_id: orderData.order_id,
                // image: "https://your-logo-url.png", // Optional
                handler: async function (response) {
                    // Payment Success! Now Register.
                    setSubmitStatus({ type: 'info', message: 'Payment Successful! Finalizing Registration...' });

                    try {
                        const finalData = {
                            ...cleanData,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature
                        };

                        const registerResponse = await fetch(`${SUPABASE_URL}/functions/v1/register`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                            },
                            body: JSON.stringify(finalData)
                        });

                        const result = await registerResponse.json();
                        if (!registerResponse.ok || !result.success) throw new Error(result.error || 'Registration failed after payment');

                        // Success Actions
                        const emailNote = result.email?.sent ? ' A confirmation email has been sent.' : '';
                        const enrollmentNote = result.enrollment_number ? ` Your Enrollment No: ${result.enrollment_number}` : '';

                        setSubmitStatus({
                            type: 'success',
                            message: `✅ Registration submitted successfully!${enrollmentNote}${emailNote}`
                        });
                        if (result.receipt_url) {
                            setReceiptUrl(result.receipt_url);
                        }
                        setIsSubmitting(false); // Enable button again if needed, or keep disabled to prevent double submit
                    } catch (err) {
                        console.error(err);
                        setSubmitStatus({
                            type: 'error',
                            message: `Payment succeeded but registration failed: ${err.message}. Please contact support with Payment ID: ${response.razorpay_payment_id}`
                        });
                        setIsSubmitting(false);
                    }
                },
                prefill: {
                    name: cleanData.full_name,
                    email: cleanData.email,
                    contact: cleanData.mobile
                },
                theme: {
                    color: "#d32f2f" // Primary Red
                },
                modal: {
                    ondismiss: function () {
                        setIsSubmitting(false);
                        setSubmitStatus({ type: 'error', message: 'Payment cancelled. Registration not completed.' });
                    }
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                console.error(response.error);
                setSubmitStatus({ type: 'error', message: `Payment Failed: ${response.error.description}` });
                setIsSubmitting(false);
            });

            rzp1.open();

        } catch (error) {
            console.error('Registration/Payment error:', error);
            setSubmitStatus({
                type: 'error',
                message: error.message || 'Something went wrong. Please try again.'
            });
            setIsSubmitting(false);
        }
    };

    return (
        <div className="registration-page">
            <div className="modern-container">
                {/* Modern Header */}
                <header className="modern-header animate-fade-in">
                    <p className="sub-header">Official Enrollment Portal</p>
                    <h1>
                        <span className="text-primary">Registration</span>
                        <span className="text-slate-900 ml-3">Form</span>
                    </h1>
                </header>

                {/* Progress Tracker */}
                <div className="progress-tracker animate-fade-in delay-1">
                    <div className="progress-line"></div>
                    <div className="progress-step active">1</div>
                    <div className="progress-step">2</div>
                    <div className="progress-step">3</div>
                    <div className="progress-step">4</div>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>

                    {/* Card 1: Personal Details */}
                    <div className="modern-card animate-fade-in delay-1">
                        <h3 className="card-title">
                            <div className="icon-bg"><span className="material-symbols-outlined text-sm">person</span></div>
                            Personal Information
                        </h3>

                        {/* Selected Course Field - Higlighted */}
                        <div className="mb-10 p-5 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-between">
                            <div>
                                <label className="text-[10px] uppercase tracking-widest font-bold text-primary mb-1 block">Selected Training Program</label>
                                <div className="text-xl font-black text-slate-900">{selectedCourse || "No Course Selected"}</div>
                            </div>
                            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                            <input type="hidden" value={selectedCourse} name="selected_program" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-group-modern">
                                <label className="label-modern">Full Name <span className="text-primary">*</span></label>
                                <input type="text" name="full_name" className="input-modern" placeholder="Enter full name" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Father's Name <span className="text-primary">*</span></label>
                                <input type="text" name="father_name" className="input-modern" placeholder="Father's name" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Date of Birth <span className="text-primary">*</span></label>
                                <input type="date" name="dob" className="input-modern" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Mobile Number <span className="text-primary">*</span></label>
                                <input type="tel" name="mobile" className="input-modern" placeholder="+91 XXXX XXXX" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Email Address <span className="text-primary">*</span></label>
                                <input type="email" name="email" className="input-modern" placeholder="your@email.com" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Educational Qualification <span className="text-primary">*</span></label>
                                <select name="education" className="input-modern select-modern" required>
                                    <option value="">Select Option</option>
                                    <option>8th Pass</option>
                                    <option>10th Pass</option>
                                    <option>12th Pass</option>
                                    <option>Graduate</option>
                                    <option>Post Graduate</option>
                                </select>
                            </div>
                        </div>

                        {/* Special Photo Section within card */}
                        <div className="mt-12 pt-10 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="form-group-modern">
                                <label className="label-modern">Passport Size Photo <span className="text-primary">*</span></label>
                                <div className="upload-zone group relative overflow-hidden">
                                    {previews.photo ? (
                                        <img src={previews.photo} alt="Preview" className="w-full h-full object-contain absolute inset-0 z-0 p-2" />
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-3xl text-slate-200 group-hover:text-primary transition-colors">cloud_upload</span>
                                            <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Click or drag to upload</p>
                                        </>
                                    )}
                                    <input type="file" name="photo" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={(e) => handleFileChange(e, 'photo')} accept="image/*" />
                                </div>
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Profile Preview</label>
                                <div className={`preview-pill h-full flex items-center justify-center min-h-[160px] ${previews.photo ? 'active' : ''}`}>
                                    {previews.photo ? (
                                        <img src={previews.photo} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">Awaiting Upload...</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Contact Address */}
                    <div className="modern-card animate-fade-in delay-2">
                        <h3 className="card-title">
                            <div className="icon-bg"><span className="material-symbols-outlined text-sm">location_on</span></div>
                            Contact Address
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-group-modern md:col-span-2">
                                <label className="label-modern">Full Address <span className="text-primary">*</span></label>
                                <textarea name="address" className="input-modern h-32 resize-none" placeholder="Enter complete address" required></textarea>
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">State <span className="text-primary">*</span></label>
                                <select name="state" className="input-modern select-modern" required>
                                    <option value="">Select State</option>
                                    <option>Punjab</option>
                                    <option>Haryana</option>
                                </select>
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">City <span className="text-primary">*</span></label>
                                <input type="text" name="city" className="input-modern" placeholder="City name" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">District <span className="text-primary">*</span></label>
                                <input type="text" name="district" className="input-modern" placeholder="District name" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Pincode <span className="text-primary">*</span></label>
                                <input type="text" name="pincode" className="input-modern" placeholder="XXXXXX" required />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Identification */}
                    <div className="modern-card animate-fade-in delay-3">
                        <h3 className="card-title">
                            <div className="icon-bg"><span className="material-symbols-outlined text-sm">badge</span></div>
                            Identity Verification
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-group-modern md:col-span-2">
                                <label className="label-modern">Aadhar Number <span className="text-primary">*</span></label>
                                <input type="text" name="aadhar_number" className="input-modern" placeholder="XXXX XXXX XXXX" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Aadhar Front Side</label>
                                <div className="upload-zone py-6 relative overflow-hidden h-40 flex flex-col items-center justify-center">
                                    {previews.aadhar_front ? (
                                        <img src={previews.aadhar_front} alt="Preview" className="w-full h-full object-contain absolute inset-0 z-0 p-2" />
                                    ) : (
                                        <span className="material-symbols-outlined text-xl text-slate-200">add_photo_alternate</span>
                                    )}
                                    <input type="file" name="aadhar_front" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={(e) => handleFileChange(e, 'aadhar_front')} accept="image/*" />
                                </div>
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Aadhar Back Side</label>
                                <div className="upload-zone py-6 relative overflow-hidden h-40 flex flex-col items-center justify-center">
                                    {previews.aadhar_back ? (
                                        <img src={previews.aadhar_back} alt="Preview" className="w-full h-full object-contain absolute inset-0 z-0 p-2" />
                                    ) : (
                                        <span className="material-symbols-outlined text-xl text-slate-200">add_photo_alternate</span>
                                    )}
                                    <input type="file" name="aadhar_back" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={(e) => handleFileChange(e, 'aadhar_back')} accept="image/*" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Driving License */}
                    <div className="modern-card animate-fade-in delay-4">
                        <h3 className="card-title">
                            <div className="icon-bg"><span className="material-symbols-outlined text-sm">driver_license</span></div>
                            Existing License Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-group-modern md:col-span-2">
                                <label className="label-modern">License Number <span className="text-primary">*</span></label>
                                <input type="text" name="license_number" className="input-modern" placeholder="DL-XXXXXXXXXXXXXXX" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Category</label>
                                <select name="license_category" className="input-modern select-modern">
                                    <option value="">Select Category</option>
                                    <option>LMV</option>
                                    <option>HMV</option>
                                </select>
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Issuing Authority</label>
                                <input type="text" name="license_authority" className="input-modern" placeholder="Enter RTO Location" />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Issue Date</label>
                                <input type="date" name="license_issue_date" className="input-modern" />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Expiry Date</label>
                                <input type="date" name="license_expiry_date" className="input-modern" />
                            </div>
                        </div>

                        {/* License Document Uploads */}
                        <div className="mt-12 pt-10 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="form-group-modern">
                                <label className="label-modern">Driving License Front Side <span className="text-primary">*</span></label>
                                <div className="upload-zone py-6 group relative overflow-hidden h-40 flex flex-col items-center justify-center">
                                    {previews.license_front ? (
                                        <img src={previews.license_front} alt="Preview" className="w-full h-full object-contain absolute inset-0 z-0 p-2" />
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-xl text-slate-200 group-hover:text-primary transition-colors">add_photo_alternate</span>
                                            <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Click or drag to upload</p>
                                        </>
                                    )}
                                    <input type="file" name="license_front" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={(e) => handleFileChange(e, 'license_front')} accept="image/*" />
                                </div>
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Driving License Back Side <span className="text-primary">*</span></label>
                                <div className="upload-zone py-6 group relative overflow-hidden h-40 flex flex-col items-center justify-center">
                                    {previews.license_back ? (
                                        <img src={previews.license_back} alt="Preview" className="w-full h-full object-contain absolute inset-0 z-0 p-2" />
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-xl text-slate-200 group-hover:text-primary transition-colors">add_photo_alternate</span>
                                            <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Click or drag to upload</p>
                                        </>
                                    )}
                                    <input type="file" name="license_back" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={(e) => handleFileChange(e, 'license_back')} accept="image/*" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <section className="animate-fade-in delay-4 pt-10 pb-20">
                        {submitStatus.message && (
                            <div className={`mb-8 p-6 rounded-xl text-center font-bold animate-fade-in ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' :
                                submitStatus.type === 'info' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                                    'bg-red-50 text-red-700 border border-red-100'
                                }`}>
                                <div className="flex flex-col items-center gap-4">
                                    <p>{submitStatus.message}</p>
                                    {receiptUrl && (
                                        <a
                                            href={receiptUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 px-6 py-2 bg-green-600 text-white text-sm font-bold rounded-full shadow-lg hover:bg-green-700 transition flex items-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-lg">download</span>
                                            Download Receipt
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                            <div className="form-group-modern">
                                <label className="label-modern">Place <span className="text-primary">*</span></label>
                                <input type="text" name="place" className="input-modern" defaultValue="Jalandhar" required />
                            </div>
                            <div className="form-group-modern">
                                <label className="label-modern">Date</label>
                                <div className="input-modern bg-slate-50 text-slate-400 font-bold">
                                    {new Date().toLocaleDateString('en-GB')}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`btn-primary-modern w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Confirm & Submit Enrollment'}
                                <span className="material-symbols-outlined">send</span>
                            </button>
                            <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.2em] text-center max-w-sm leading-relaxed">
                                By submitting, you declare that all information provided is accurate and truthful.
                            </p>
                            <p className="text-[8px] text-slate-200">v1.1</p>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default Register;
