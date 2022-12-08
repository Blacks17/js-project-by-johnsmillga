import { url, page_url } from "./wiki-urls.js";

const formDOM = document.querySelector(".form");
const inputDOM = document.querySelector(".form-input");
const resultsDOM = document.querySelector(".results");

formDOM.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = inputDOM.value;
  if (!value) {
    resultsDOM.innerHTML = `
      <div class="error"> Please enter valid search terms</div>
    `;
  }
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  resultsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    // console.log(results);
    if (results.length < 1) {
      resultsDOM = `<div class="error">No matching results found</div>`;
      return;
    }
    renderResults(results);
  } catch (error) {
    resultsDOM.innerHTML = `<div class="error">There was an error.. try again later</div>`;
  }
};

const renderResults = (list) => {
  const cardList = list
    .map((item) => {
      const { title, snippet, pageid } = item;
      return `<a ${page_url}${pageid} target="_blank">
    <h4>${title}</h4>
    <p>${snippet}</p>
    </a>`;
    })
    .join("");
  resultsDOM.innerHTML = `<div class="articles">
                        ${cardList}
                        </div>`;
};
