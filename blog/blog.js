const cur = document.getElementById("cur");
const ring = document.getElementById("cur-ring");

if (cur && ring) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cur.style.left = `${mouseX}px`;
        cur.style.top = `${mouseY}px`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(animateRing);
    }

    animateRing();

    document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cur.style.width = "12px";
            cur.style.height = "12px";

            ring.style.width = "44px";
            ring.style.height = "44px";
            ring.style.opacity = "0.7";
        });

        el.addEventListener("mouseleave", () => {
            cur.style.width = "8px";
            cur.style.height = "8px";

            ring.style.width = "32px";
            ring.style.height = "32px";
            ring.style.opacity = "0.4";
        });
    });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Dynamic footer year
document.getElementById('blog-yr').textContent = new Date().getFullYear();
