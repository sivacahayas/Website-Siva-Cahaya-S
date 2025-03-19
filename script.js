function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    document.body.appendChild(raindrop);

    let startX = Math.random() * window.innerWidth;
    let duration = Math.random() * 1.5 + 0.5;

    raindrop.style.left = startX + 'px';
    raindrop.style.animation = `fall ${duration}s linear`;

    setTimeout(() => {
        createSplash(startX, window.innerHeight - 10);
        raindrop.remove();
    }, duration * 1000);
}

function createSplash(x, y) {
    const splash = document.createElement('div');
    splash.classList.add('splash');
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';
    document.body.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 300);
}

setInterval(createRaindrop, 50);

const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        0% { transform: translateY(-10px); opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0.5; }
    }

    .raindrop {
        position: absolute;
        width: 2px;
        height: 10px;
        background-color: lightblue;
        opacity: 0.7;
    }

    .splash {
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: lightblue;
        border-radius: 50%;
        opacity: 0.6;
    }
`;
document.head.appendChild(style);
