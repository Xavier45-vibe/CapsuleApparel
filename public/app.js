(function () {
  var bagKey = 'capsule-bag-count';
  var toastTimer;

  function setBag(count) {
    var counter = document.querySelector('.bag-count');
    var button = document.querySelector('.bag-button');
    counter.textContent = count;
    button.setAttribute('aria-label', 'Shopping bag, ' + count + (count === 1 ? ' item' : ' items'));
  }

  function showToast(text) {
    var toast = document.querySelector('.toast');
    toast.textContent = text;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('visible'); }, 2400);
  }

  var stored = 0;
  try { stored = Number(localStorage.getItem(bagKey)) || 0; } catch (e) {}
  setBag(stored);

  // Mobile navigation
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '×' : '☰';
  });

  function closeNav() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.textContent = '☰';
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) closeNav();
  });
  window.addEventListener('resize', function () { if (window.innerWidth > 600) closeNav(); });

  // Product page: size selection + add to bag
  var sizes = document.querySelectorAll('.size-options [data-size]');
  var selected = null;
  sizes.forEach(function (btn) {
    btn.addEventListener('click', function () {
      selected = btn.dataset.size;
      sizes.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('selected', active);
        b.setAttribute('aria-pressed', String(active));
      });
    });
  });

  var add = document.querySelector('[data-add-to-bag]');
  if (add) {
    add.addEventListener('click', function () {
      if (!selected) { showToast('Please select a size first'); return; }
      stored += 1;
      try { localStorage.setItem(bagKey, String(stored)); } catch (e) {}
      setBag(stored);
      showToast(add.dataset.name + ' · ' + selected + ' added to your bag');
    });
  }

  // Newsletter
  var form = document.querySelector('#newsletter-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (form.checkValidity()) {
        document.querySelector('.form-message').textContent = 'You’re on the list. Talk soon!';
        form.reset();
      }
    });
  }
})();
