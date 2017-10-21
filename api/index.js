const got = require("got");
const fs = require("fs");

const LIST_OF_PROGRAMMING_LANGUAGES =
  "https://en.wikipedia.org/w/api.php?action=query&titles=List_of_programming_languages&prop=links&pllimit=500&format=json";
const LIST_OF_PROGRAMMING_LANGUAGES_2 =
  "https://en.wikipedia.org/w/api.php?action=query&titles=List_of_programming_languages&prop=links&pllimit=213&pldir=descending&format=json";
const PAGE_ID = "144146";

function getBottomHalfLimit() {
  return got(LIST_OF_PROGRAMMING_LANGUAGES, { json: true }).then(response => {
    return response.body.query.pages[PAGE_ID].links.map(link => link.title);
  });
}

function getTopHalfLimit() {
  return got(LIST_OF_PROGRAMMING_LANGUAGES_2, { json: true }).then(response => {
    return response.body.query.pages[PAGE_ID].links.map(link => link.title);
  });
}

async function getAllProgrammingLanguages() {
  const topProgrammingLanguages = await getTopHalfLimit();
  const bottomProgrammingLanguages = await getBottomHalfLimit();

  return [...topProgrammingLanguages, ...bottomProgrammingLanguages];
}

getAllProgrammingLanguages().then(value => {
  const programmingLanguages = value.map(value => {
    return { language: value };
  });

  fs.writeFile("../public/anotherOne.json", JSON.stringify(programmingLanguages), err => {
    return new Error(err);
  });
});
