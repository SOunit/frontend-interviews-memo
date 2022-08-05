/* 
    data attribute
    - to pass data from template to JavaScript

    

*/

console.log("hello from JS");

const h1 = document.getElementsByTagName("h1");
console.log(h1[0].dataset);

const h2 = document.getElementsByTagName("h2");
console.log(h2[0].dataset);

h2[0].dataset.totalCount = "2";
console.log(h2[0].dataset);
