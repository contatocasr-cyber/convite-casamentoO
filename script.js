function tocarMusica() {
    document.getElementById("musica").play();
}

/* PARTÍCULAS LUXO */
const canvas = document.getElementById("particulas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random(),
        twinkle: Math.random() * 0.05
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.opacity += p.twinkle;
        if (p.opacity > 1 || p.opacity < 0.2) {
            p.twinkle *= -1;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(212,175,55,${p.opacity})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    });

    update();
}

function update() {
    particles.forEach(p => {
        p.y += p.speed;

        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }
    });
}

setInterval(draw, 30);


window.addEventListener("scroll", function() {
    const carta = document.getElementById("carta");
    const posicao = carta.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
        carta.classList.add("mostrar");
    }
});