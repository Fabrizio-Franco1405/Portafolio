function updateActiveSection() {
  const sections = ["hero", "about", "skills", "projects", "contact"];
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  let activeSection = "hero";

  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element && scrollPos >= element.offsetTop - window.innerHeight / 2) {
      activeSection = section;
    }
  });

  document.querySelectorAll(".nav-item .nav-links").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${activeSection}`) {
      link.classList.add("active");
    }
  });
}

document.addEventListener('scroll', updateActiveSection)
updateActiveSection()