// product qty calculator
const quantityElement = document.querySelector(".quantity-text");
const priceElement = document.querySelector('.item__price');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const headerBasketSpan = document.querySelectorAll('.header__basket span');
headerBasketSpan.forEach(element => {
    element.textContent = quantityElement.textContent

});

if (plusButton) {
    minusButton.addEventListener("click", () => {
        if (quantityElement.textContent > 1) {
            quantityElement.textContent--
            headerBasketSpan.forEach(element => {
                element.textContent = quantityElement.textContent

            });
        }
    });

    plusButton.addEventListener("click", () => {
        quantityElement.textContent++
        headerBasketSpan.forEach(element => {
            element.textContent = quantityElement.textContent
        });
    });
}