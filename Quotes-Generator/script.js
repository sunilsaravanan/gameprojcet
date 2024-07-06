const Quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("btn");

async function randomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const quote = await response.json();

  // Output the quote and author name
  Quote.innerHTML = quote.content;
  author.innerHTML = `- ${quote.author}`;
}

window.addEventListener("load", randomQuote);
button.addEventListener("click", randomQuote);
