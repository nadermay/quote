const quoteContainer = document.getElementById("quote-container");
const quotesText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("x");
const newQuotesBtn = document.getElementById("new-quote");

//  get quots from API
let apiQuots = [];
//  show new quotes
function newQuotes() {
  //pick ronndome quotes from the api quotes
  const quote = apiQuots[Math.floor(Math.random() * apiQuots.length)];
  // check if author field is blank and replace it
  if (!quote.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //   check quote length to add styling

  if (quote.text.length > 120) {
    quotesText.classList.add("long-quote");
  } else {
    quotesText.classList.remove("long-quote");
  }
  quotesText.textContent = quote.text;
}
async function getQuotes() {
  const apiUrl =
    "https://medromdhani.github.io/mohamed.github.io/data/quotes.json";

  try {
    const response = await fetch(apiUrl);
    apiQuots = await response.json();
    newQuotes();
  } catch (error) {}
}
// tweet quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quotesText.textContent}/${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
// event listner
newQuotesBtn.addEventListener('click',newQuotes)
twitterBtn.addEventListener('click',tweetQuote)
getQuotes();
