const counterTag = document.getElementById("reviews-counter");
let reviews = Number(window.localStorage.getItem("reviews-counter")) || 0;

reviews++;

localStorage.setItem("reviews-counter", reviews);

if (counterTag) {
    if (reviews === 1) {
        counterTag.textContent = `This is your first review. 🥳 Thanks for giving us feedback to improve our products!`;
    } else {
        counterTag.textContent = `Number of reviews: ${reviews}`;
    }
}