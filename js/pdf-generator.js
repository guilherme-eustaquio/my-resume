const divisor = 7;

class PdfGenerator {

    generate() {

        let doc = new jsPDF('l', 'mm', [385, 300]);
        
        let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
        let pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();

        this.setTitle(doc, pageHeight, pageWidth);
        this.setName(doc, pageWidth);
        this.setPersonalInfo(doc, pageWidth);
        this.setDescription(doc, pageWidth);
        this.setExperience(doc, pageWidth);
        this.setTechnicalSkills(doc, pageWidth);
        this.setPersonalSkills(doc, pageWidth);
        this.setEducation(doc, pageWidth);
        doc.output('dataurlnewwindow');
        //doc.save(`${titles[LANG]}.pdf`);
    }

    setTitle(doc, pageHeight, pageWidth) {
        doc.setFontSize(20);
        doc.setFillColor(0, 10, 21);
        doc.rect(0, 0, 50, pageHeight, "F");
        doc.addImage("./images/profile/me-pdf.png", "PNG", 5, 5, 42, 40);
        doc.text(pdfTitle[LANG], pageWidth/1.8, 20, { align: "center" });
    }

    setName(doc, pageWidth) {
        doc.setFontSize(15);
        doc.text(aboutOptions[LANG].name, pageWidth/divisor, 40);
    }

    setPersonalInfo(doc, pageWidth) {
        let info = `${aboutOptions[LANG].cityState} · ${aboutOptions[LANG].phone} · ${aboutOptions[LANG].age}`;
        doc.setFontSize(9);
        doc.text(info, pageWidth/divisor, 45);
    
        info = `${aboutOptions.socialMedia.email} · ${aboutOptions.socialMedia.linkedin}`
    
        doc.text(info, pageWidth/divisor, 50);
    }

    setDescription(doc, pageWidth) {
        doc.setFontSize(12);
        doc.text(aboutOptions[LANG].descriptions, pageWidth/divisor, 60);    
    }

    setExperience(doc, pageWidth) {
        doc.setFontSize(15);
        doc.text(experienceOptions[LANG].title, pageWidth/divisor, 80);
        let experiences = experienceOptions[LANG].companiesPoint.map((company) => {
            return `- ${company.name}: ${company.work} `
        });

        doc.setFontSize(12);
        doc.text(experiences, pageWidth/divisor, 90); 
    }

    setTechnicalSkills(doc, pageWidth) {
        doc.setFontSize(15);
        doc.text(technicalSkillsOptions[LANG].title, pageWidth/divisor, 110);
        doc.setFontSize(12);
        doc.text(technicalSkillsOptions[LANG].skills, pageWidth/divisor, 120); 
    }

    setPersonalSkills(doc, pageWidth) {
        doc.setFontSize(15);
        doc.text(personalSkillsOptions[LANG].title, pageWidth/divisor, 185);
        doc.setFontSize(12);
        doc.text(personalSkillsOptions[LANG].skills, pageWidth/divisor, 195); 
    }

    setEducation(doc, pageWidth) {
        doc.setFontSize(15);
        doc.text(educationOptions[LANG].title, pageWidth/divisor, 235);
        let position = 245;

        educationOptions[LANG].courses.forEach(
            (course) => {
                doc.setFontSize(12);
                doc.text(course.title, pageWidth/divisor, position);
                position = position + 5;
                doc.setFontSize(10);
                doc.text(course.description, pageWidth/divisor + 0.012, position);
                position = position + 5;


            }
        );

    }
    
}