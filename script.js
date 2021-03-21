function el(e) {
    return document.querySelector(e);
}

const sliderRange = el("#range1");
const priceTag = el("#price-tag");
const priceTag_2 = el("#price-tag-2");

sliderRange.addEventListener("input", ()=>{
    priceTag.textContent = "$" + sliderRange.value + ".00";
    priceTag_2.textContent = "$" + sliderRange.value + ".00";
    sliderRange.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${sliderRange.value/32 * 100}%, hsl(224, 65%, 95%) ${sliderRange.value/32 * 100}%, hsl(224, 65%, 95%) 100%)`;
});