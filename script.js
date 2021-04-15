const sliderRange = document.querySelector("#sliderpage");
const priceTag = document.querySelector(".top__price > span:first-of-type");
const views = document.querySelector(".top__views > span");
const form = document.querySelector("form");

sliderRange.addEventListener("input", event =>{
    if (form.billings.value == "monthly") {
        priceTag.textContent = `$${event.target.value}.00`;
    } else if (form.billings.value == "yearly") {
        priceTag.textContent = `$${(event.target.value - (event.target.value * 0.25).toFixed(2))}`;
    }
    views.textContent = `${6.25 * event.target.value}K`;
    sliderRange.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${sliderRange.value/32 * 100}%, hsl(224, 65%, 95%) ${sliderRange.value/32 * 100}%, hsl(224, 65%, 95%) 100%)`;
}) 


form.addEventListener("change", event =>{
    if (event.target.name == "billings") {
        let currentPrice = parseInt(sliderRange.value);
        if (form.billings.value == "monthly") {
            priceTag.textContent = `$${currentPrice.toFixed(2)}`;
        } else {
            priceTag.textContent = `$${(currentPrice - (currentPrice * 0.25)).toFixed(2)}`;
        }
    }
})