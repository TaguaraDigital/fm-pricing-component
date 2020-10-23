const isMonthly = document.getElementById("monthly");
const cards = document.getElementById("cards");


isMonthly.addEventListener("click", (e) => {
    document.querySelectorAll('.price-card__price').forEach(price => {
        price.classList.toggle('hidden')
    }) 
})