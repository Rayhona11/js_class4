   // DOM BOM

console.log(window);
console.log(document);

// ? SELECTOR querySelector and getElementById
// GET
let h = document.getElementsByTagName('h1')
let h2 = document.getElementsByClassName('one')
let h3 = document.getElementById('two')
console.dir(h);
console.dir(h2);
console.dir(h3);

// QUERY
// let h4 = document.querySelector('h1')
// let h4 = document.querySelector('.one')
let h4 = document.querySelector("#two")
let h5 = document.querySelector('h1')
console.dir(h4)
console.dir(h5)

h4.style.color = "red"

//  Classwork
// let a = document.querySelector('form')
// console.dir(a)

let b = document.querySelector('a')
console.dir(b)

let c = document.querySelector('section')
console.dir(c)

let y = document.querySelectorAll('form')
console.dir(y);
