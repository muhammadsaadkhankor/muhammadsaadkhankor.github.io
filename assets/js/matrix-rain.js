(function () {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  const chars = '01';
  const fontSize = 16;
  let columns, drops;

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height / fontSize;
    }
  }

  function draw() {
    ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize + fontSize / 2;
      const y = drops[i] * fontSize;
      const alpha = 0.2 + Math.random() * 0.35;

      if (Math.random() > 0.975) {
        ctx.fillStyle = '#00ff9d';
      } else {
        ctx.fillStyle = 'rgba(34, 197, 94, ' + alpha + ')';
      }

      ctx.textAlign = 'center';
      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
})();
