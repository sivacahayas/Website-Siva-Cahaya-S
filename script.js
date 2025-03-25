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

    setInterval(createStar, 300);

    // Tambahin tombol dark mode di pojok kanan atas
    const toggleButton = document.createElement("button");
    toggleButton.id = "mode-toggle";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.backgroundColor = "#007BFF";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.padding = "10px 15px";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.fontSize = "18px";
    toggleButton.textContent = "🌙"; // Default icon bulan

    document.body.appendChild(toggleButton);

    // Toggle Dark Mode
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        // Ganti icon tombol
        toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
    });

    // Cek mode terakhir yang disimpan di localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️"; // Matahari kalau dark mode aktif
    }

    // Update Waktu
    function updateTime() {
        const timeBox = document.getElementById("timeBox");
        if (!timeBox) return;

        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const now = new Date();

        const dayName = days[now.getDay()];
        const date = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        timeBox.innerHTML = `
            <p><strong>Hari:</strong> ${dayName}</p>
            <p><strong>Pukul:</strong> ${hours}.${minutes}.${seconds}</p>
        `;
    }

    setInterval(updateTime, 1000);
    updateTime();
});
