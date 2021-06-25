const nextBtn = document.getElementById("next-btn");
const quoteVal = document.getElementById("quote");
const authorVal = document.getElementById("author");

const fetchQuote = () => {
  fetch("https://api.quotable.io/random?minLength=100&maxLength=140")
    .then((response) => response.json())
    .then((data) => {
      console.log(`${data.content} —${data.author}`);
      quoteVal.innerHTML = data.content;
      authorVal.innerHTML = data.author;
    });
};

nextBtn.addEventListener("click", () => {
  fetchQuote();
});

document.onload = fetchQuote();
