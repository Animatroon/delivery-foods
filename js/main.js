const cartButton = document.querySelector("#basket_button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", function (event) {
    modal.classList.add("is_open");
    
});

close.addEventListener("click", function (event) {
    modal.classList.remove("is_open");

});

function toggleModal() {
    modal.classList.toggle('is_open')
}

new WOW().init();

