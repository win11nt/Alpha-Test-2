document.querySelectorAll(".accordion-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector(".toggle-icon");
        const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

        // Đóng tất cả
        document.querySelectorAll(".accordion-content").forEach(c => {
            c.style.maxHeight = "0px";
        });
        document.querySelectorAll(".toggle-icon").forEach(i => {
            i.textContent = "+";
        });

        // Mở nếu đang đóng
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = "−";
        }
    });
});
