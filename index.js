document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  const customFormattedDate = `${monthName} ${day}, ${year}`;
  const dateEl = document.getElementById("date");
  if (dateEl) dateEl.textContent = customFormattedDate;

  const quotes = [
    "Just because something works, doesn't mean it can't be improved.",
    "With great power comes great responsibility.",
    "The hardest choices require the strongest wills.",
    "I would rather be a good man than a great king.",
    "Don't waste it. Don't waste your life",
  ];

  const contentEl = document.getElementById("content");
  if (contentEl) {
    contentEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  }
});

const Clicked = document.querySelector(".searchb button");
if (Clicked) {
  Clicked.addEventListener("click", redirectPage);
}

function redirectPage() {
  const searchInput = document.querySelector(".searchb input");
  const query = searchInput.value.trim();
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    searchInput.value = ''; // Clear the input after redirect
  }
}