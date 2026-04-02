const canvas = document.getElementById("particulas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// CRIA PARTÍCULAS FINAS
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5, // bem pequeno (luxo)
        speed: Math.random() * 1 + 0.2,
        opacity: Math.random()
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(212,175,55,${p.opacity})`; // dourado suave
        ctx.shadowColor = "#d4af37";
        ctx.shadowBlur = 8;

        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    });

    update();
}

function update() {
    particles.forEach(p => {
        p.y += p.speed;
        p.x += Math.sin(p.y * 0.002); // movimento leve (chique)

        // reset elegante
        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }
    });
}

setInterval(draw, 30);

function tocarMusica() {
    const musica = document.getElementById("musica");
    musica.play();
} 