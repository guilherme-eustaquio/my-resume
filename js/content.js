const aboutOptions = {
	"pt-BR": {
		name: "Guilherme Eustáquio Moreira Santana",
		street: "Rua Fuad Abib Attuch 115",
		district: "Jardim Patrícia",
		cityState: "Uberlândia MG",
		zip:"38414198",
		phone: "(34) 9-9877-3935",
		age: `${moment().diff('1997-07-28', 'years', false)} anos`,
		email: "guilherme.eustaquio.moreira@gmail.com",
		descriptions: ["- Know-how em desenvolvimento de sistemas em front-end e back-end",
		"- Elaboração de arquitetura de sistemas",
		"- Criação de sistemas IOT"]
	},
	"en-US": {
		name: "Guilherme Eustáquio Moreira Santana",
		street: "115 Fuad Abib Attuch",
		district: "Jardim Patrícia",
		cityState: "Uberlândia MG, Brazil",
		zip:"38414198",
		phone: "+55 34 9-9877-3935",
		age: `${moment().diff('1997-07-28', 'years', false)} years old`,
		email: "guilherme.eustaquio.moreira@gmail.com",
		descriptions: ["- Know-how in front-end and back-end systems development",
		"- Systems architecture development",
		"- Creation of IOT systems"]
	}
};

const experienceOptions = {
	"pt-BR": {
		title: "Experiência",
		help: "Clique em algum alfinete no mapa para mostrar detalhes sobre o local que já trabalhei",
		companiesPoint : [
			{
				name: "Kyros Tecnologia (Estágio)",
				work: "Desenvolvedor backend Java + Spring Boot e SQL. Trabalho com sistemas da Algar como SOM, CRM, CAL e Jira.",
				coordinates: [-18.9009556,-48.2630205]
			}, 
			{
				name: "FAU - Fundação Apoio Universitário (Contrato)",
				work: "Desenvolvedor front-end (Angular) e backend (NodeJS) focado em IOT para redes elétricas da CEB.",
				coordinates: [-18.9207809,-48.2610507]
			}
		],
		streetView: "Abrir no Street View"
	},
	"en-US": {
		title: "Experience",
		help: "Click on a pin on the map to show details about the place I’ve worked at",
		companiesPoint : [
			{
				name: "Kyros Technology (Internship)",
				work: "Java + Spring Boot and SQL backend developer. I work with Algar systems such as SOM, CRM, CAL and Jira.",
				coordinates: [-18.9009556,-48.2630205]
			}, 
			{
				name: "FAU - University Support Foundation (Contract)",
				work: "Front-end (Angular) and backend (NodeJS) developer focused on IOT for CEB's electrical networks.",
				coordinates: [-18.9207809,-48.2610507]
			}
		],
		streetView: "Open on Street View"
	}
}

const technicalSkillsOptions = {
	"pt-BR": {
		title:"Competências Técnicas",
		skills: [
			"- HTML, CSS3 e framework Bootstrap",
			"- Javascript para Web e frameworks/bibliotecas Angular 2, jQuery, etc",
			"- Java e frameworks Hibernate, JPA e Spring",
			"- NodeJS e framework Express",
			"- PHP e framework Laravel",
			"- Banco de Dados MySQL e PostgreSQL",
			"- Desenvolvimento mobile utilizando Ionic e Angular como framework",
			"- Embarcados: Arduino e ESP8266",
			"- Docker",
			"- Git (Bitbucket, Github e Gitlab)",
			"- Linux e Windows",
			"- Pacote office (Excel, PowerPoint, Word)"
		]
	},
	"en-US": {
		title:"Technical Skills",
		skills: [
			"- HTML, CSS3 and Bootstrap framework",
			"- Javascript for Web and frameworks / libraries Angular 2, jQuery, etc",
			"- Java and Hibernate, JPA and Spring frameworks",
			"- NodeJS and Express framework",
			"- PHP and Laravel framework",
			"- MySQL and PostgreSQL databases",
			"- Mobile development using Ionic and Angular as a framework",
			"- Embedded: Arduino and ESP8266",
			"- Docker",
			"- Git (Bitbucket, Github and Gitlab)",
			"- Linux and Windows",
			"- Office package (Excel, PowerPoint, Word)"
		]
	}
};

const personalSkillsOptions = {
	"pt-BR": {
		title:"Competências Pessoais",
		skills: [
			"- Boa comunicação",
			"- Proatividade",
			"- Vontade e persistência em aprender novas tecnologias",
			"- Flexibilidade",
			"- Organização",
			"- Facilidade em passar o conhecimento"
		]
	},
	"en-US": {
		title:"Personal Skills",
		skills: [
			"- Good communication",
			"- Proactivity",
			"- Willingness and persistence in learning new technologies",
			"- Flexibility",
			"- Organization",
			"- I can teach some content easily"
		]
	}
};

const educationOptions = {
	"pt-BR": {
		title:"Educação",
		courses: [
			{
				title: "Universidade Federal de Uberlândia",
				description: ["Cursando Sistemas de Informação com previsão de formação no segundo semestre de 2021"]
			},
			{
				title: "Sesi Guiomar de Freitas Costa",
				description: ["Segundo grau completo concluído em 2015"]
			},
			{
				title: "Coach Me - English",
				description: [
					" - Fazendo aulas particulares de inglês focado em conversação e negócios",
					" - Inglês intermediário com capacidade de iniciar uma conversa e compreender o falante atualmente"
				]
			},
			{
				title: `Treinamento Interno - <a class = "link-image" onclick = "openModalImage('images/profile/certificate-kyros.jpeg', 'Certificado Kyros')">Microcontroladores: orientação e instruções e RTOS</a></h4><p class="lead text-muted ml-3">`,
				description: ["Treinamento interno da empresa Kyros Tecnologia com duração de 26 horas no período de Julho de 2019."]
			}

		]
	},
	"en-US": {
		title:"Education",
		courses: [
			{
				title: "Federal University of Uberlândia",
				description: ["Studying Information Systems scheduled to be completed in the second half of 2021"]
			},
			{
				title: "Sesi Guiomar de Freitas Costa",
				description: ["High school completed in 2015"]
			},
			{
				title: "Coach Me - English",
				description: [
					" - Studying English classes focused on conversation and business",
					" - Intermediate level English with the ability to start a conversation and understand the speaker"
				]
			},
			{
				title: `Internal Training - <a class = "link-image" onclick = "openModalImage('images/profile/certificate-kyros.jpeg', 'Kyros Certificate')">Microcontrollers: guidance and instructions and RTOS</a></h4><p class="lead text-muted ml-3">`,
				description: ["Internal training of the company Kyros Tecnologia with a duration of 26 hours in the period of July 2019"]
			}

		]
	},
};

let map = L.map('mapid').setView([-18.9220192, -48.4036511], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function initContent() {

	const initAbout = function() {

		let aboutElement = document.getElementById("about");
		let str = `
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1">
            <h1 class="h2">${aboutOptions[LANG].name}</h1>
          </div>
          <h6>${aboutOptions[LANG].street} · ${aboutOptions[LANG].district} · ${aboutOptions[LANG].cityState} · 
          ${aboutOptions[LANG].phone} · ${aboutOptions[LANG].age} · <a href = "mailto: ${aboutOptions[LANG].email}">${aboutOptions[LANG].email}</a></h6>

		`;


		aboutOptions[LANG].descriptions.forEach(description => {
			str += `
	          <p class="lead text-muted mt-4 ml-3">    
				${description}
	          </p>`;
		});

		aboutElement.innerHTML = str;
	}

	const initExperience = function() {

		experienceOptions[LANG].companiesPoint.forEach(exp => {
			L.marker(exp.coordinates).addTo(map)
			.bindPopup(`<b>${exp.name}</b><br>${exp.work}<br><br>
				<a target = "_blank" href = "https://www.google.com/maps?layer=c&cbll=${exp.coordinates[0]},${exp.coordinates[1]}">${experienceOptions[LANG].streetView}</a>`).openPopup();
		});

		let contentElement = document.getElementById("experience");

		if(contentElement.childElementCount > 1) {
			contentElement.removeChild(contentElement.childNodes[0]); 
		}


		let str = `
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1">
                    <h1 class="h2">${experienceOptions[LANG].title}</h1>
                </div>
                <p class="lead text-muted ml-3">    
                	${experienceOptions[LANG].help}
                </p>
		`;

		let newElement = document.createElement('div');
		newElement.innerHTML = str;

		contentElement.prepend(newElement);

	}

	const initTechnicalSkill = function() {
		let technicalSkillElement = document.getElementById("technical-skills");
		let str = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1 mb-3">
                <h1 class="h2">${technicalSkillsOptions[LANG].title}</h1>
            </div>
		`;

		technicalSkillsOptions[LANG].skills.forEach(skill => {
			str += `
                <p class="lead text-muted ml-3">    
                    ${skill}
                </p>
			`;
		});

		technicalSkillElement.innerHTML = str;

	}

	const initPersonalSkill = function() {
		let personalSkillElement = document.getElementById("personal-skills");
		let str = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1 mb-3">
                <h1 class="h2">${personalSkillsOptions[LANG].title}</h1>
            </div>
		`;

		personalSkillsOptions[LANG].skills.forEach(skill => {
			str += `
                <p class="lead text-muted ml-3">    
                    ${skill}
                </p>
			`;
		});

		personalSkillElement.innerHTML = str;

	}

	const initEducation = function() {
		let educationElement = document.getElementById("education");
		let str = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1 mb-3">
                <h1 class="h2">${educationOptions[LANG].title}</h1>
            </div><div class = "ml-3">
		`;

		educationOptions[LANG].courses.forEach(course => {

			let descriptions = course.description;
			
			str += `
                <h4>${course.title}</h4>
            `;

			descriptions.forEach(description => {
                str += `<p class="lead text-muted ml-3">    
					${description}
                </p>`
			});

		});

		str += "</div>";

		educationElement.innerHTML = str;

	}

	initAbout();
	initExperience();
	initTechnicalSkill();
	initPersonalSkill();
	initEducation();
}

document.getElementsByTagName("body")[0].addEventListener("changelang", function() {
	initContent();
});