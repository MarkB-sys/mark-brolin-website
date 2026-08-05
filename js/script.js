// Keep page behaviour scoped and lightweight for the static site.
document.addEventListener('DOMContentLoaded', () => {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const links = document.querySelectorAll('.nav .links a');

  links.forEach((link) => {
    const href = link.getAttribute('href')?.toLowerCase();
    if (!link.classList.contains('current') && href && href === path) {
      link.classList.add('current');
    }
  });
});
