'use strict';

const myModule = {};

//
// Generate content
//
myModule.generateString = function () {
  const content = 'This is some text content generated from a module function';
  return content;
};

myModule.fetchJson = function (el) {
  const fetchURL = '/api/myroute';
  const fetchOptions = {
    method: 'get',
    headers: {
      Accept: 'application/json'
    }
  };
  fetch(fetchURL, fetchOptions)
    .then((response) => {
      // console.log(response.status);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Fetch status ' + response.status + ' ' + response.statusText);
      }
    })
    .then((responseJson) => {
      console.log(JSON.stringify(responseJson));
      el.textContent = JSON.stringify(responseJson, null, 2);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { myModule };
