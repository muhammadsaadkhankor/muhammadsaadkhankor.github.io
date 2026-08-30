(function () {
  document.querySelectorAll('.accordion-header button').forEach(function (button) {
    button.addEventListener('click', function () {
      const accordion = button.closest('.accordion');
      const isOpen = accordion.classList.contains('open');
      if (isOpen) {
        accordion.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      } else {
        accordion.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const topFab = document.getElementById('top-fab');
  if (topFab) {
    topFab.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const skillsFab = document.getElementById('skills-fab');
  if (skillsFab) {
    skillsFab.addEventListener('click', function () {
      const skills = document.getElementById('skills');
      if (skills) {
        skills.scrollIntoView({ behavior: 'smooth' });
        const button = skills.querySelector('.accordion-header button');
        if (button && button.getAttribute('aria-expanded') === 'false') {
          button.click();
        }
      }
    });
  }
})();
