// ---------------------------------------------------
// This is a standard script loaded my index.html
// ---------------------------------------------------
'use strict';

// blank lines to sync line numbers
//
//

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
