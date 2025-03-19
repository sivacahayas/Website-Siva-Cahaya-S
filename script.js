document.addEventListener("DOMContentLoaded", function () {
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 10 + 5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.left = `${Math.random() * window.innerWidth}px`;

        const duration = Math.random() * 3 + 3;
        star.style.animationDuration = `${duration}s`;

        document.body.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }

    setInterval(createStar, 300);
});
