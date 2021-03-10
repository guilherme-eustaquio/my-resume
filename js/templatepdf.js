const pdfTitle = {
  "pt-BR": "Currículo de Guilherme Eustáquio.pdf",
  "en-US": "Resume of Guilherme Eustáquio.pdf"  
};

const createPdfTemplate = function() {

  function preparePdfTemplate() {
    console.log("entrei aqui dentro");
    let div = document.createElement("div");

    div.className = "container-fluid background-outside-pdf";

    let htmlStr = `<div class="d-flex justify-content-center background-inner-pdf shadow">`;
    
    htmlStr += `
            <div class="d-flex justify-content-center background-inner-pdf shadow">

              <main role="main">
                  
                  <div class = "content">

                    <div class="d-flex justify-content-center mb-5">
                        <img src = "images/profile/me.jpeg" class = "profile profile-pdf">
                    </div>`;

    htmlStr += setAbout();
    htmlStr += setExperience();
    htmlStr += setTechnicalSkill();
    htmlStr += setPersonalSkill();
    htmlStr += setEducation();

    div.innerHTML = htmlStr;
    return div;
  }


  function setAbout() {

      let str = `
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1">
              <h1 class="h2">${aboutOptions[LANG].name}</h1>
            </div>
            <h6>${aboutOptions[LANG].street} · ${aboutOptions[LANG].district} · ${aboutOptions[LANG].cityState} · 
            ${aboutOptions[LANG].phone} · ${aboutOptions[LANG].age} · ${aboutOptions[LANG].email}</h6>

      `;

      aboutOptions[LANG].descriptions.forEach(description => {
        str += `
              <p class="lead text-muted mt-4 ml-3">    
                ${description}
              </p>`;
      });

      return str;
  }

  function setExperience() {

    let str = `
                  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-1">
                      <h1 class="h2">${experienceOptions[LANG].title}</h1>
                  </div>
                  <p class="lead text-muted ml-3">    
                    ${experienceOptions[LANG].help}
                  </p>
      `;

    experienceOptions[LANG].companiesPoint.forEach(exp => {
      str += `
            <p class="lead text-muted mt-4 ml-3">    
            - ${exp.name}: ${exp.work}
            </p>`;
    });

    return str;
  }

  function setTechnicalSkill() {

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

      return str;
  }

  function setPersonalSkill() {
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

      return str;
  }

  function setEducation() {

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

      return str;
  }

  return preparePdfTemplate();
}





$("#generate-pdf").click(function() {

  window.jsPDF = window.jspdf.jsPDF;

  let templateElement = createPdfTemplate();

  html2canvas(templateElement, { useCORS:true}).then(function(canvas) {
        
        let height = templateElement.offsetHeight;
        let width = templateElement.offsetWidth;

        let imgData = canvas.toDataURL(
            'image/png');
        let doc = new jsPDF('L', 'px', [width, height]);
        doc.addImage(imgData, 'JPEG', 0, 0, width, height);
        doc.save(pdfTitle[LANG]);
  });
});
