const sideBar = {
	
	"pt-BR": [
		{
			id: "about",
			name: "Sobre"
		},
		{
			id: "experience",
			name: "Experiência"
		},
		{
			id: "technical-skills",
			name: "Competências Técnicas"
		},
		{
			id: "personal-skills",
			name: "Competências Pessoais"
		},
		{
			id: "education",
			name: "Educação"
		}
	],
	"en-US": [
		{
			id: "about",
			name: "About"
		},
		{
			id: "experience",
			name: "Experience"
		},
		{
			id: "technical-skills",
			name: "Technical Skills"
		},
		{
			id: "personal-skills",
			name: "Personal Skills"
		},
		{
			id: "education",
			name: "Education"
		}
	]

};

let sideBarIds = [];
let lastElementSelected = null;
let eventDisableScroll = false;

function initSidebar() {

	let sidebarElement = document.getElementById("sidebar-items");
	let str = "";
	let targetIndex = 0;

	sideBarIds = [];
	
	sideBar[LANG].forEach((item, index) => {

		let active = "";

		if(`#${item.id}` == window.location.hash) {
			active = " active";
			targetIndex = index;
		}

		str += `
          <li class="nav-item">
            <a href = "#${item.id}" id = "${item.name}" class="nav-link${active}" onclick = "scrollPage(this); animatePage('${item.id}')">
              ${item.name}
            </a>
          </li>
		`;

		sideBarIds.push(`#${item.id}`);
	});

	sidebarElement.innerHTML = str;
	lastElementSelected = document.getElementById(sideBar[LANG][targetIndex].name);
}

function scrollPage(element) {
	if(lastElementSelected != element) {
		lastElementSelected.className = "nav-link";
	}

	element.className = "nav-link active";
	lastElementSelected = element;
}

function animatePage(id) {
	eventDisableScroll = true;
    $('html, body').animate({
        scrollTop: $(`#${id}`).offset().top - 100
    }, 300, function() {
    	eventDisableScroll = false;
    });
}



document.getElementsByTagName("body")[0].addEventListener("changelang", function() {
	initSidebar();
});

$(window).scroll(function (event) {

	if (window.matchMedia("(max-device-width: 480px)").matches) {
		return;
	}

	setTimeout(function() {
	    let scroll = $(window).scrollTop();

	    if(eventDisableScroll) {
	    	return false;
	    }

	    sideBarIds.forEach((sidebarId, index) => {
	    	if(scroll >= $(sidebarId).offset().top - 500) {
	    		elementA = document.getElementById(sideBar[LANG][index].name);
	    		scrollPage(elementA);
		    }

	    });

	}, 500);


});


