function showMessage() {
    document.getElementById("message").classList.remove("hidden");

    // 🎉 Confetti when message opens
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
}

function revealPhoto(box) {
    const img = box.querySelector("img");

    if (!img.classList.contains("show-img")) {
        img.classList.add("show-img");

        // Change text after click
        box.childNodes[0].textContent = "✨ Beautiful Memory ✨";

        // 🎊 Confetti
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}
function showMessage() {
    document.getElementById("message").classList.remove("hidden");

    // 🎵 Play music
    const music = document.getElementById("bg-music");
    music.play();

    // 🎉 Confetti
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });

    // hide button
    document.querySelector("button").style.display = "none";
}
