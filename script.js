function confirmar() {
    const msg = document.getElementById("mensagem");
    msg.classList.add("mostrar");
    msg.innerHTML = "💙 Presença confirmada! Mal podemos esperar!";
}

function tocarMusica() {
    document.getElementById("musica").play();
}

/* PARTÍCULAS */
const canvas = document.getElementById("particulas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        d: Math.random() * 1
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(212,175,55,0.8)";
    ctx.beginPath();

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }

    ctx.fill();
    update();
}

function update() {
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.y += p.d;

        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }
    }
}

