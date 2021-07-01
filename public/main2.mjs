// ---------------------------------------------------
// This is a an import module load from index2.html
// ---------------------------------------------------
'use strict';
console.log('Loading main2.mjs');

import {myModule} from "./modules/my-module2.mjs";

if (typeof myModule !== 'object') {
  console.log('myModule not loaded');
} else {
  document.getElementById('executeButton').addEventListener('click', function(event) {
    console.log('click');
    //
    // Fill in string returned from custom module
    //
    let customContent = myModule.generateString();
    document.getElementById('contentDiv').textContent = customContent;
    //
    // Pass element to fetch function to fill contents
    //
    let fetchDivElement = document.getElementById('fetchDiv');
    myModule.fetchJson(fetchDivElement);
  }.bind(this));
}

console.log('Done loading main2.mjs');
