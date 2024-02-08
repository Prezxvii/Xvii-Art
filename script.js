function toggleSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}

function goToMainPage() {
  window.location.href = "index.html";
}

function toggleSection(sectionId) {
  var urlParams = new URLSearchParams(window.location.search);
  var currentPage = urlParams.get('section');

  if (currentPage === 'contact') {
    // Hide all sections except for the Contact section
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });

    var contactSection = document.getElementById(sectionId);
    if (contactSection) {
      contactSection.style.display = 'block';
    }
  }
}