'use strict';
console.log('Loading my-module2.mjs');

const myModule = {};

//
// Generate content
//
myModule.generateString = function() {
  let content = 'This is some text content generated from a module function';
  return content;
};

myModule.fetchJson = function(el) {
  let fetchURL = '/api/myroute';
  let fetchOptions = {
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
  };
  fetch(fetchURL, fetchOptions)
    .then( (response) => {
      // console.log(response.status);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Fetch status ' + response.status + ' ' + response.statusText);
      }
    })
    .then( (responseJson) => {
      console.log(JSON.stringify(responseJson));
      el.textContent = JSON.stringify(responseJson, null, 2);
    })
    .catch( (error) => {
      showError('Terminate: Unable to connect');
      console.log(error);
    });
};

export {myModule};

console.log('Done loading my-module2.mjs');
