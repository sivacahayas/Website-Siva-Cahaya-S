document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars-container");
    document.body.appendChild(starContainer);

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 10 + 5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;

        const duration = Math.random() * 3 + 3;
        star.style.animationDuration = `${duration}s`;

        starContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }

    setInterval(createStar, 500); 
    const toggleButton = document.getElementById("toggle-mode");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️"; 
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
    });

    function updateTime() {
        const timeBox = document.getElementById("realTime");
        if (!timeBox) return;

        const now = new Date();
        timeBox.innerHTML = now.toLocaleString("id-ID", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    setInterval(updateTime, 1000);
    updateTime();
});
