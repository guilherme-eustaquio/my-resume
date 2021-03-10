let modalTitle = document.getElementById("modal-title");
let modalContent = document.getElementById("modal-content");
let modalClose = document.getElementById("modal-close");
let lastLangSelected = "";

const modalCloseOptions = {
	"pt-BR": "Fechar",
	"en-US": "Close"
};


function initModal() {
	modalClose.innerHTML = modalCloseOptions[LANG];
}

function openModalImage(url, title) {

	modalTitle = document.getElementById("modal-title");
	modalContent = document.getElementById("modal-content");

	modalTitle.innerHTML = title;
	modalContent.innerHTML = `
		<img src = "${url}" class="img-fluid">
	`;

	$('#modal').modal('show');
}

document.getElementsByTagName("body")[0].addEventListener("changelang", function() {
	initModal();
});