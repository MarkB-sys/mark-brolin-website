// Keep everything scoped per page to avoid duplicate variables across pages
document.addEventListener('DOMContentLoaded', () => {
    // Highlight current nav item if not already marked
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const links = document.querySelectorAll('.nav .links a');
    links.forEach(a => {
      const href = a.getAttribute('href')?.toLowerCase();
      if (!a.classList.contains('current') && href && href === path) {
        a.classList.add('current');
      }
    });
  
    // (Optional) If you want the Realist-Optimist handle to drag visually only
    const handle = document.querySelector('.bar-handle');
    const slider = document.querySelector('.bar-slider');
    const track = document.querySelector('.bar-track');
    if (handle && slider && track) {
      let dragging = false;
      handle.addEventListener('dragstart', e => { dragging = true; });
      handle.addEventListener('dragend',   e => { dragging = false; });
      track.addEventListener('dragover', (e) => {
        if (!dragging) return;
        e.preventDefault();
        const rect = track.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        const pct = x / rect.width;
        slider.style.left = (pct * 100) + '%';
        slider.style.transform = 'translateX(-50%)';
      });
    }
  
    // Nothing else global — avoids any "duplicate variable" issues.
  });
  