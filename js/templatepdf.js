const pdfTitle = {
  "pt-BR": "Currículo de Guilherme Eustáquio.pdf",
  "en-US": "Resume of Guilherme Eustáquio.pdf"  
};

$("#generate-pdf").click(function() {

  window.jsPDF = window.jspdf.jsPDF;


  initContent(["about-pdf", "experience-pdf", "technical-skills-pdf", "personal-skills-pdf", "education-pdf"], false);

  let pdfRendered = document.getElementById("about");
  pdfRendered.style.display = "block";
  
  html2PDF(pdfRendered, {
    jsPDF: {
      format: 'a4',
      orientation: 'landscape'
    },
    html2canvas: {
      logging: true,
      useCORS: true,
      scale: 3
    },
    imageType: 'image/jpeg',
    output: pdfTitle[LANG],
    imageQuality: 1,
    margin: {
      top: 0,
      right: 30,
      bottom: 0,
      left: 30,
    }
  });

  pdfRendered.style.display = "none";

});
