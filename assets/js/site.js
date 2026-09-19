/* Small helpers for carlasrebot.github.io — no framework needed. */
(function () {
  'use strict';

  /* Mobile navigation toggle. */
  var navbar = document.getElementById('navbar');
  var toggle = navbar && navbar.querySelector('.nav-toggle');

  if (navbar && toggle) {
    toggle.addEventListener('click', function () {
      var open = navbar.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* Abstract toggles on the research page. */
  document.addEventListener('click', function (event) {
    var trigger = event.target.closest && event.target.closest('[data-abstract]');
    if (!trigger) return;

    event.preventDefault();
    var target = document.getElementById(trigger.getAttribute('data-abstract'));
    if (target) {
      target.open = !target.open;
    }
  });
})();
