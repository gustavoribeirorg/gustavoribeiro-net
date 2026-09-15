/* Perfume-Mode — Hero */

(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (!toggle || !mobileNav) return;

  function closeNav() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    mobileNav.hidden = true;
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeNav();
    } else {
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      mobileNav.hidden = false;
    }
  });

  Array.prototype.forEach.call(mobileNav.querySelectorAll('a'), function (link) {
    link.addEventListener('click', closeNav);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) closeNav();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileNav.hidden) {
      closeNav();
      toggle.focus();
    }
  });
})();
