SCRIPT JS YG UDH ADA COOKIENYA

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

    // Ambil tombol mode yang udah ada di HTML
    const toggleButton = document.getElementById("toggle-mode");

    if (!toggleButton) {
        console.error("Tombol mode tidak ditemukan!");
        return;
    }

    // Cek mode terakhir dari localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "☀️"; // Matahari kalau dark mode aktif
    }

    // Event listener buat toggle mode
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
    });

    // Update Waktu
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

    // ========== COOKIE BANNER ==========

    if (!localStorage.getItem("cookieConsent")) {
        const cookieBanner = document.createElement("div");
        cookieBanner.className = "cookie-banner";
        cookieBanner.innerHTML = `
            <p>Website ini menggunakan cookie untuk meningkatkan pengalaman pengguna. Setuju?</p>
            <button class="accept">Setuju</button>
            <button class="decline">Tolak</button>
        `;

        document.body.appendChild(cookieBanner);

        const acceptBtn = cookieBanner.querySelector(".accept");
        const declineBtn = cookieBanner.querySelector(".decline");

        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookieConsent", "accepted");
            cookieBanner.remove();
        });

        declineBtn.addEventListener("click", function () {
            localStorage.setItem("cookieConsent", "declined");
            cookieBanner.remove();
        });
    }
});

