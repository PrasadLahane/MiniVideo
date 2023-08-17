function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
//   script to be used only if there were buttons in the header, since there were links in the header we do not need this script