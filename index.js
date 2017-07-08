const got = require('got');

got('https://en.wikipedia.org/w/api.php?action=query&titles=List_of_programming_languages&prop=revisions&rvprop=content&format=json')
  .then( response => {
    console.log(response.body);
});
