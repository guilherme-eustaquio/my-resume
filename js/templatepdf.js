const pdfTitle = {
  "pt-BR": "Currículo de Guilherme Eustáquio.pdf",
  "en-US": "Resume of Guilherme Eustáquio.pdf"  
};

$("#generate-pdf").click(function() {

  window.jsPDF = window.jspdf.jsPDF;


  initContent(["about-pdf", "experience-pdf", "technical-skills-pdf", "personal-skills-pdf", "education-pdf"], false);
  
  let pdfRendered = document.getElementById("pdf-to-render");
  pdfRendered.style.display = "block";
  
  html2PDF(pdfRendered, {
    jsPDF: {
      format: 'a3',
      orientation: 'portrait'
    },
    html2canvas: {
      useCORS: true,
      scale: 2
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    imageType: 'image/jpeg',
    output: pdfTitle[LANG],
    imageQuality: 1
  });

  pdfRendered.style.display = "none";

});
