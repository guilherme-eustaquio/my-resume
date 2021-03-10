var LANG = "pt-BR";
let event = new Event('changelang');
let titles = {
	"pt-BR": "Currículo Guilherme",
	"en-US": "Guilherme Resume"
};
let pdfTitle = {
	"pt-BR": "Currículo de Guilherme Eustáquio",
	"en-US": "Resume of Guilherme Eustáquio"	
}


$(document).ready(function() {
	if(location.hash == "") {
		location.hash = "#about";
	}

	changeLanguage("#portuguese");
});


$("#generate-pdf").click(function() {
	html2canvas(document.body, { useCORS:true}).then(function(canvas) {
        let imgData = canvas.toDataURL(
            'image/png');
        let doc = new jsPDF('p', 'mm');
        doc.addImage(imgData, 'PNG', 10, 10);
        doc.save(pdfTitle[LANG]);
	});
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

