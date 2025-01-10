document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        // Remover clase activa de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir clase activa al botón clicado
        button.classList.add('active');
  
        // Filtrar proyectos
        projects.forEach(project => {
          if (filter === 'all' || project.getAttribute('data-category') === filter) {
            project.style.display = 'block';
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
          } else {
            project.style.display = 'none';
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
          }
        });
      });
    });
});  