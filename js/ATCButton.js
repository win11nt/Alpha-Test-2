const button = document.getElementById("dynamicButton");
const planRadios = document.querySelectorAll("input[name='plan']");

planRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.checked) {
            const text = radio.dataset.text;
            const price = radio.dataset.price;

            button.innerHTML = `
        <span class="button-text text-base aeonik">${text}</span>
        <span class="dash_new text-base aeonik">–</span>
        <span class="product_price_new text-base aeonik">${price}</span>
      `;
        }
    });
});
