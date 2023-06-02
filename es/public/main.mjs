// ---------------------------------------------------
// This is a an ES module loaded from index.html
// ---------------------------------------------------
'use strict';

import { myModule } from './modules/my-module.mjs';

console.log('Loading main.mjs');

if (typeof myModule !== 'object') {
  console.log('myModule not loaded');
} else {
  document.getElementById('executeButton').addEventListener('click', function (event) {
    console.log('click');
    //
    // Fill in string returned from custom module
    //
    const customContent = myModule.generateString();
    document.getElementById('contentDiv').textContent = customContent;
    //
    // Pass element to fetch function to fill contents
    //
    const fetchDivElement = document.getElementById('fetchDiv');
    myModule.fetchJson(fetchDivElement);
  });
}

console.log('Done loading main.mjs');
