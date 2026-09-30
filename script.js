// Custom cursor
  var cur  = document.getElementById('cur');
  var ring = document.getElementById('cur-ring');
  var mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', function(e) { mx = e.clientX; my = e.clientY; });
  (function tick() {
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tick);
  })();
  document.querySelectorAll('a, button').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
      cur.style.width  = '14px'; cur.style.height  = '14px';
      ring.style.width = '48px'; ring.style.height = '48px';
    });
    el.addEventListener('mouseleave', function() {
      cur.style.width  = '8px';  cur.style.height  = '8px';
      ring.style.width = '32px'; ring.style.height = '32px';
    });
  });

  // Dynamic years of experience — runs immediately, no dependencies
  (function() {
    var start = new Date(2025, 8, 1); 
    var years = (new Date() - start) / (1000 * 60 * 60 * 24 * 365.25);
    var val   = (Math.floor(years * 2) / 2).toFixed(1);
    document.getElementById('yrs').textContent = val + '+';
  })();

  // Dynamic footer year
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Scroll reveal
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e, i) {
      if (e.isIntersecting) {
        setTimeout(function() { e.target.classList.add('in'); }, i * 55);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(function(el) { io.observe(el); });

  // Active nav on scroll
  var secs  = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', function() {
    var cur = '';
    secs.forEach(function(s) {
      if (window.scrollY >= s.offsetTop - 100) cur = s.id;
    });
    links.forEach(function(a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });