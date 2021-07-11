window.jsPDF = window.jspdf.jsPDF;
var LANG = "pt-BR";
let event = new Event('changelang');
let titles = {
	"pt-BR": "Currículo Guilherme",
	"en-US": "Guilherme Resume"
};
let pdfTitle = {
	"pt-BR": "Meu currículo",
	"en-US": "My resume"	
}


$(document).ready(function() {
	if(location.hash == "") {
		location.hash = "#about";
	}

	changeLanguage("#portuguese");
});


$("#generate-pdf").click(function() {

	new PdfGenerator().generate();

	/*
	var doc = new jsPDF();
	let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
	let pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();

	doc.setFontSize(20);
	doc.setFillColor(0, 10, 21);
	doc.rect(0, 0, 50, doc.internal.pageSize.getHeight(), "F");
	doc.addImage("./images/profile/me-pdf.png", "PNG", 5, 5, 42, 42);

	doc.text(pdfTitle[LANG], doc.internal.pageSize.getWidth()/1.65, 20, { align: "center" });

	doc.setFontSize(15);
	doc.text(aboutOptions[LANG].name, pageWidth/3.8, 40);

	let info = `${aboutOptions[LANG].street} · ${aboutOptions[LANG].district} · ${aboutOptions[LANG].cityState} · ${aboutOptions[LANG].phone} · ${aboutOptions[LANG].age}`;
	doc.setFontSize(9);
	doc.text(info, pageWidth/3.8, 45);

	info = `${aboutOptions.socialMedia.email} · ${aboutOptions.socialMedia.linkedin}`

	doc.text(info, pageWidth/3.8, 50);

	doc.setFontSize(12);
	doc.text(aboutOptions[LANG].descriptions, pageWidth/3.8, 60);

	doc.setFontSize(15);
	doc.text(experienceOptions[LANG].title, pageWidth/3.8, 80);


	//doc.save("my-resume.pdf");
	doc.output('dataurlnewwindow');*/



});


$("#portuguese-option, #english-option").click(function() {

	let langsOption = document.getElementsByName("lang-option");

	langsOption.forEach(lang => {

		if(lang.checked) {
			let selectedLang = `#${lang.id.split("-")[0]}`;
			changeLanguage(selectedLang);
			return;
		}

	});
});

$("#portuguese-item").click(function() {
	changeLanguage("#portuguese");
});

$("#english-item").click(function() {
	changeLanguage("#english");
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

function changeLanguage(languageSelected) {
	
	let englishOption = document.getElementById("english-option");
	let portugueseOption = document.getElementById("portuguese-option");

    switch(languageSelected) {
    	case "#portuguese":
    		LANG = "pt-BR";
    		englishOption.checked = false;
			portugueseOption.checked = !englishOption.checked;
			break;
    	case "#english":
    		LANG = "en-US";
    		englishOption.checked = true;
			portugueseOption.checked = !englishOption.checked;
			break;

    }

    let title = document.getElementById("title-page");

    title.innerHTML = titles[LANG];

    document.getElementsByTagName("body")[0].dispatchEvent(event);
}

