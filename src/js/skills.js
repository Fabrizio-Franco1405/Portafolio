document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = `${level}%`;
          });
        }
      });
    }, {
      threshold: 0.5
    });
  
    observer.observe(skillsSection);
});  