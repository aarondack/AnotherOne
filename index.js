const got = require('got');

const LIST_OF_PROGRAMMING_LANGUAGES = 'https://en.wikipedia.org/w/api.php?action=query&titles=List_of_programming_languages&prop=revisions&rvprop=content&format=json';
const PAGE_ID = '144146';
const REVISIONS = '*';

got(LIST_OF_PROGRAMMING_LANGUAGES, { json: true })
  .then( response => {
    const body = response.body;
    console.log(response.body.query.pages[PAGE_ID]);
});
