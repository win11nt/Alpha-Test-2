
const modal = document.getElementById("videoModal");
const video = document.getElementById("popupVideo");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll("[data-video]").forEach(slide => {
    slide.addEventListener("click", () => {
        const videoUrl = slide.getAttribute("data-video");
        video.querySelector("source").src = videoUrl;
        video.load();
        video.play();
        modal.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    video.pause();
    video.querySelector("source").src = "";
    video.load();
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        video.pause();
        video.querySelector("source").src = "";
        video.load();
    }
});
