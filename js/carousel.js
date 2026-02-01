(() => {
    const images = [
        "./assets/img/carousel1.webp",
        "./assets/img/carousel2.webp",
        "./assets/img/carousel3.webp",
        "./assets/img/carousel4.webp",
        "./assets/img/carousel5.webp",
        "./assets/img/carousel6.webp",
        "./assets/img/carousel7.webp",
        "./assets/img/carousel8.webp",
        "./assets/img/carousel9.webp",
        "./assets/img/carousel10.webp",
        "./assets/img/carousel11.webp",
        "./assets/img/carousel8.webp",
        "./assets/img/carousel12.webp",
        "./assets/img/carousel13.webp",
    ];

    const track = document.getElementById("carousel-track");
    const thumbTrack = document.getElementById("thumb-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const productOptions = document.querySelectorAll(".product-option");

    let currentIndex = 0;
    let scrollIndex = 0;

    const thumbHeightPx = 100;
    const visibleThumbs = 6;

    function showImage(index) {
        currentIndex = index;
        track.innerHTML = `
            <img src="${images[index]}" class="max-w object-contain rounded-lg" />
        `;
        const thumbs = thumbTrack.querySelectorAll("img");
        thumbs.forEach((thumb, i) => {
            thumb.classList.remove("selected");
            if (i === index) {
                thumb.classList.add("selected");
            }
        });
    }

    function scrollThumbs(offset) {
        scrollIndex += offset;
        const maxIndex = images.length - visibleThumbs;
        scrollIndex = Math.max(0, Math.min(scrollIndex, maxIndex));

        thumbTrack.scrollTo({
            top: scrollIndex * thumbHeightPx,
            behavior: "smooth"
        });

        updateButtons();
    }

    function updateButtons() {
        prevBtn.style.display = scrollIndex > 0 ? "block" : "none";
        nextBtn.style.display = scrollIndex < images.length - visibleThumbs ? "block" : "none";
    }

    function initThumbs() {
        thumbTrack.innerHTML = "";
        images.forEach((src, idx) => {
            const thumb = document.createElement("img");
            thumb.src = src;
            thumb.className = "w-24 h-24 mb-2 object-cover cursor-pointer rounded-xl flex-shrink-0";
            thumb.addEventListener("click", () => {
                showImage(idx);
            });
            thumbTrack.appendChild(thumb);
        });
    }

    function initCarousel() {
        initThumbs();
        showImage(0);
        scrollThumbs(0);
    }

    productOptions.forEach(option => {
        option.addEventListener("click", () => {
            productOptions.forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");

            if (option.dataset.type === "sachet") {
                images[0] = "./assets/img/carousel13.webp"; // Sachets
            } else {
                images[0] = "./assets/img/carousel1.webp";  // Jar
            }

            initThumbs();
            showImage(0);
        });
    });


    prevBtn.addEventListener("click", () => scrollThumbs(-1));
    nextBtn.addEventListener("click", () => scrollThumbs(1));

    initCarousel();
})();
