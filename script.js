/*
  Basic JavaScript enhancements for the personal profile site.
  - Applies a slight random rotation to every element with the
    `.polaroid` class on page load to emulate a scrapbook aesthetic.
  - Enables smooth scrolling for internal anchor links (e.g. navigation
    jumping between sections).
*/

document.addEventListener('DOMContentLoaded', () => {
  // Apply random rotation to polaroid elements
  document.querySelectorAll('.polaroid').forEach(el => {
    // Choose a random degree between -3 and +3
    const deg = Math.random() * 6 - 3;
    // Preserve any previously defined rotation set via CSS classes
    const existing = getComputedStyle(el).transform;
    // If the element already has a rotate transform, append our random value
    el.style.transform = existing === 'none'
      ? `rotate(${deg}deg)`
      : `${existing} rotate(${deg}deg)`;
  });

  // Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      // Skip if href is just '#'
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});