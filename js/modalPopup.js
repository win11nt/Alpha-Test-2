const openBtn = document.getElementById("openHsaModal");
const closeBtn1 = document.getElementById("closeHsaModal");
const modal1 = document.getElementById("hsaModal");

openBtn.addEventListener("click", () => {
    modal1.classList.remove("hidden");
});

closeBtn1.addEventListener("click", () => {
    modal1.classList.add("hidden");
});

// Optional: click outside to close
modal1.addEventListener("click", (e) => {
    if (e.target === modal1) {
        modal1.classList.add("hidden");
    }
});
