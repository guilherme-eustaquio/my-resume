class PdfGenerator {

    constructor() {
        this.spaceHeight = 20;
        this.extraSpaceTitle = 2;
        this.divisor = 7;
        this.spaceBetweenTopics = 12;
        this.doc = new jsPDF('l', 'mm', [390, 300]);
        this.pageWidth = this.doc.internal.pageSize.width || this.doc.internal.pageSize.getWidth();
        this.pageHeight = this.doc.internal.pageSize.height || this.doc.internal.pageSize.getHeight();
    }

    generate() {
        
        this.setTitle();
        this.setName();
        this.setPersonalInfo();
        this.setDescription();
        this.setExperience();
        this.setTechnicalSkills();
        this.setPersonalSkills();
        this.setEducation();
        //this.doc.output('dataurlnewwindow');
        this.doc.save(`${titles[LANG]}.pdf`);
    }

    setTitle() {
        this.doc.setFontSize(20);
        this.doc.setFillColor(0, 10, 21);
        this.doc.rect(0, 0, 50, this.pageHeight, "F");
        this.doc.addImage("./images/profile/me-pdf.png", "PNG", 5, 5, 42, 40);
        this.doc.text(pdfTitle[LANG], this.pageWidth/1.8, this.spaceHeight, { align: "center" });
        this.spaceHeight += this.doc.getTextDimensions(pdfTitle[LANG]).h + 12;
    }

    setName() {
        this.doc.setFontSize(15);
        this.doc.text(aboutOptions[LANG].name, this.pageWidth/this.divisor, this.spaceHeight);
        this.spaceHeight += this.doc.getTextDimensions(aboutOptions[LANG].name).h;
    }

    setPersonalInfo() {

        let info = `${aboutOptions[LANG].cityState} · ${aboutOptions[LANG].phone} · ${aboutOptions[LANG].age}`;
        this.doc.setFontSize(9);
        this.doc.text(info, this.pageWidth/this.divisor, this.spaceHeight);

        this.spaceHeight += this.doc.getTextDimensions(info).h;

        info = `${aboutOptions.socialMedia.email} · ${aboutOptions.socialMedia.linkedin}`
    
        this.doc.text(info, this.pageWidth/this.divisor, this.spaceHeight);

        this.spaceHeight += this.doc.getTextDimensions(info).h + 5;

    }

    setDescription() {
        this.doc.setFontSize(12);
        this.doc.text(aboutOptions[LANG].descriptions, this.pageWidth/this.divisor, this.spaceHeight);
        this.spaceHeight += this.doc.getTextDimensions(aboutOptions[LANG].descriptions).h + this.spaceBetweenTopics;
    }

    setExperience() {
        
        this.doc.setFontSize(15);
        
        this.doc.text(experienceOptions[LANG].title, this.pageWidth/this.divisor, this.spaceHeight);
        this.spaceHeight += this.doc.getTextDimensions(experienceOptions[LANG].title).h + this.extraSpaceTitle;

        let experiences = experienceOptions[LANG].companiesPoint.map((company) => {
            return `- ${company.name}: ${company.work} `
        });

        this.doc.setFontSize(12);
        this.doc.text(experiences, this.pageWidth/this.divisor, this.spaceHeight);
        this.spaceHeight += this.doc.getTextDimensions(experiences).h + this.spaceBetweenTopics;
    }

    setTechnicalSkills() {
        this.doc.setFontSize(15);
        this.doc.text(technicalSkillsOptions[LANG].title, this.pageWidth/this.divisor, this.spaceHeight);

        this.spaceHeight += this.doc.getTextDimensions(technicalSkillsOptions[LANG].title).h + this.extraSpaceTitle;

        this.doc.setFontSize(12);
        this.doc.text(technicalSkillsOptions[LANG].skills, this.pageWidth/this.divisor, this.spaceHeight);
        this.spaceHeight += this.doc.getTextDimensions(technicalSkillsOptions[LANG].skills).h + this.spaceBetweenTopics;
    }

    setPersonalSkills() {
        this.doc.setFontSize(15);
        this.doc.text(personalSkillsOptions[LANG].title, this.pageWidth/this.divisor, this.spaceHeight);

        this.spaceHeight += this.doc.getTextDimensions(personalSkillsOptions[LANG].title).h + this.extraSpaceTitle;


        this.doc.setFontSize(12);
        this.doc.text(personalSkillsOptions[LANG].skills, this.pageWidth/this.divisor, this.spaceHeight);
        this.spaceHeight += this.doc.getTextDimensions(personalSkillsOptions[LANG].skills).h + this.spaceBetweenTopics;

    }

    setEducation() {
        this.doc.setFontSize(15);
        this.doc.text(educationOptions[LANG].title, this.pageWidth / this.divisor, this.spaceHeight);

        this.spaceHeight += this.doc.getTextDimensions(educationOptions[LANG].title).h + this.extraSpaceTitle;

        educationOptions[LANG].courses.forEach(
            (course) => {
                this.doc.setFontSize(12);
                this.doc.text(course.title, this.pageWidth / this.divisor, this.spaceHeight);
                this.spaceHeight = this.spaceHeight + 5;
                this.doc.setFontSize(10);
                this.doc.text(course.description, this.pageWidth / this.divisor + 0.012, this.spaceHeight);
                this.spaceHeight = this.spaceHeight + 5;
            }
        );
    }    
}