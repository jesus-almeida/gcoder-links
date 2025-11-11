const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Ajuste del tamaño del canvas
function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const chars = '01';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

// 🎯 Ajustes para rendimiento y suavidad
const trailOpacity = 0.12;  // Menor valor = más estela (más “fantasma”)
const dropSpeed = 120;       // Mayor = más lento

// Función de dibujo principal
function draw() {
  ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff7f';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, dropSpeed);
