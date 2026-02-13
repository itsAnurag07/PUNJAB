import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateRegistrationPDF = (data) => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text("ITDC Punjab - Enrollment Receipt", 105, 20, { align: "center" });

    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(`Registration Date: ${new Date().toLocaleDateString('en-GB')}`, 105, 28, { align: "center" });

    // Line separator
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.line(20, 35, 190, 35);

    // Training Details
    doc.setFontSize(14);
    doc.setTextColor(37, 99, 235); // primary blue
    doc.text("Training Program", 20, 45);
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.text(data.selected_program || "Course Not Specified", 20, 52);

    const tableRows = [
        ["Field", "Details"],
        ["Full Name", data.full_name],
        ["Father's Name", data.father_name],
        ["Date of Birth", data.dob],
        ["Mobile Number", data.mobile],
        ["Email Address", data.email],
        ["Educational Qualification", data.education],
        ["Full Address", data.address],
        ["City / District", `${data.city}, ${data.district}`],
        ["State / Pincode", `${data.state} - ${data.pincode}`],
        ["Aadhar Number", data.aadhar_number],
        ["Aadhar Front", data.aadhar_front ? "Attached (View in Links Section)" : "Not Uploaded"],
        ["Aadhar Back", data.aadhar_back ? "Attached (View in Links Section)" : "Not Uploaded"],
        ["License Number", data.license_number],
        ["License Category", data.license_category],
        ["License Authority", data.license_authority],
        ["License Expiry", data.license_expiry_date],
        ["Place of Submission", data.place],
    ];

    autoTable(doc, {
        startY: 60,
        head: [tableRows[0]],
        body: tableRows.slice(1),
        theme: 'striped',
        headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255] },
        alternateRowStyles: { fillColor: [248, 250, 252] },
        styles: { fontSize: 10, cellPadding: 3 },
    });

    // Appendix: Links
    const linkY = (doc.lastAutoTable?.finalY || 160) + 10;
    doc.setFontSize(11);
    doc.setTextColor(37, 99, 235);
    doc.text("Digital Documents (Click to view):", 20, linkY);

    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    let currentY = linkY + 7;
    if (data.photo) { doc.textWithLink("• Profile Photo", 20, currentY, { url: data.photo }); currentY += 6; }
    if (data.aadhar_front) { doc.textWithLink("• Aadhar Front", 20, currentY, { url: data.aadhar_front }); currentY += 6; }
    if (data.aadhar_back) { doc.textWithLink("• Aadhar Back", 20, currentY, { url: data.aadhar_back }); currentY += 6; }

    // Footer / Declaration
    const finalY = currentY + 15;
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text("This is an electronically generated receipt. No physical signature is required.", 105, finalY, { align: "center" });
    doc.text("© 2026 ITDC Punjab. All Rights Reserved.", 105, finalY + 5, { align: "center" });

    return doc;
};
