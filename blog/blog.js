const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');

if (window.matchMedia('(pointer:fine)').matches) {
  let mx = innerWidth / 2, my = innerHeight / 2;
  let rx = mx, ry = my;
  addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
  function follow() {
    rx += (mx - rx) * .13; ry += (my - ry) * .13;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(follow);
  }
  follow();
  document.querySelectorAll('a').forEach(a => {
    a.addEventListener('mouseenter', () => { cur.style.width='12px'; cur.style.height='12px'; ring.style.width='42px'; ring.style.height='42px'; ring.style.opacity='.65'; });
    a.addEventListener('mouseleave', () => { cur.style.width='8px'; cur.style.height='8px'; ring.style.width='32px'; ring.style.height='32px'; ring.style.opacity='.4'; });
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Dynamic footer year
document.getElementById('blog-yr').textContent = new Date().getFullYear();
