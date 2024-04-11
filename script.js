const mainContainer = document.querySelector(".main-container");
const thanks = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll('.li-button');


//write the code that when the submit button is clicked on it removes the class of hidden from the thank-you div:
submitButton.addEventListener("click",  () => {
    thanks.classList.remove("hidden");
    mainContainer.style.display = "none";
})
// and a code that displays the mainContainer if the user wants to rate again
rateAgain.addEventListener("click",  () => {
    thanks.classList.add("hidden");
    mainContainer.style.display = "block";
})

//write a code that loops through the button of rates and adds and event listener that prints the innerHtml of what ever button the user clicked in put span  element:
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})