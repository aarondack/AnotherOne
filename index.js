const got = require('got');

const LIST_OF_PROGRAMMING_LANGUAGES = 'https://en.wikipedia.org/w/api.php?action=query&titles=List_of_programming_languages&prop=links&pllimit=500&format=json';
const LIST_OF_PROGRAMMING_LANGUAGES_2='https://en.wikipedia.org/w/api.php?action=query&titles=List_of_programming_languages&prop=links&pllimit=213&pldir=descending&format=json';
const PAGE_ID = '144146';
const fs = require('fs');

export function getTop() {
 return got(LIST_OF_PROGRAMMING_LANGUAGES, { json: true })
  .then( response => {
    topHalf = response.body.query.pages[PAGE_ID].links;
    return topHalf.map(link => link.title);
});
};

export function getBottom() {
  return got(LIST_OF_PROGRAMMING_LANGUAGES_2, { json: true })
  .then( response  => {
    bottomHalf = response.body.query.pages[PAGE_ID].links;
    return bottomHalf.map(link => link.title);
});
};

async function awaitTopNBottom() {
  let topArray =  await getTop();
  let bottomArray = await getBottom();

  let programmingLanguages = [...topArray, ...bottomArray];
  return programmingLanguages;
    };

awaitTopNBottom().then(value => {
  return fs.writeFile('anotherOne.json', JSON.stringify(value), (err) => {console.log(err)});
});

