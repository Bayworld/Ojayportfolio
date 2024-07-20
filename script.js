function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function toggleMode() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeIcon.className = 'fa fa-moon'; // Change to heart icon for dark mode
  } else {
    themeIcon.className = 'fa fa-sun'; // Change to cloud icon for light mode
  }

  // Save the theme preference to localStorage
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Set initial theme based on localStorage or system preference
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  // Check for saved theme preference in localStorage
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.className = 'fas fa-moon'; // Set heart icon for dark mode
  } else {
    body.classList.remove('dark-mode');
    themeIcon.className = 'fa fa-sun'; // Set cloud icon for light mode
  }
});
