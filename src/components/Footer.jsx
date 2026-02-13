import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer-logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20">
            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
                <div>
                    <div className="flex flex-col gap-2 mb-4">
                        <img src={footerLogo} alt="JIDT Jalandhar Logo" className="h-16 w-auto object-contain self-start" />
                        <h2 className="font-black text-sm leading-none uppercase tracking-widest">Jalandhar Institute of <br /> Drivers Training</h2>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed">
                        Jalandhar Institute of Drivers Training is a government-approved driver training institution dedicated to providing high-quality driving education and skill development.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <a className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
                        <a className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20" href="#"><span className="material-symbols-outlined">camera</span></a>
                        <a className="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold text-xl mb-8">Quick Links</h5>
                    <ul className="space-y-4 text-white/70 text-sm">
                        <li><Link className="hover:text-white transition-colors" to="/">HOME</Link></li>
                        <li><Link className="hover:text-white transition-colors" to="/about">About Us</Link></li>
                        <li><a className="hover:text-white transition-colors" href="/new-forms">Online Registration</a></li>
                        <li><Link className="hover:text-white transition-colors" to="/contact">Contact Us</Link></li>

                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-xl mb-8">Contact Info</h5>
                    <ul className="space-y-4 text-white/70 text-sm">
                        <li className="flex gap-3">
                            <span className="material-symbols-outlined text-primary-200">location_on</span>
                            <span>Dharam Complex, G.T. Road, Kartarpur, Jalandhar, 144801</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="material-symbols-outlined text-primary-200">call</span>
                            <span>+91 90560-66473,+91 90560-66373</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="material-symbols-outlined text-primary-200">mail</span>
                            <span>info@jidtjalandhar.com</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-xl mb-8">Newsletter</h5>
                    <p className="text-white/70 text-sm mb-4">Stay updated with our latest news and courses.</p>
                    <form className="flex flex-col gap-3">
                        <input className="bg-white/10 border-white/20 rounded py-2 px-4 text-sm focus:ring-1 focus:ring-white" placeholder="Your Email Address" type="email" />
                        <button className="bg-white text-primary font-bold py-2 rounded text-sm hover:bg-white/90">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="bg-black/20 py-6 px-10 text-center text-white/50 text-xs font-medium">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <p>© 2026 JIDT Jalandhar. All rights reserved. Government approved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-white" href="#">Privacy Policy</a>
                        <a className="hover:text-white" href="#">Terms of Use</a>
                        <a className="hover:text-white" href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
