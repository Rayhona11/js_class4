 // DOM BOM 

// Content bilan ishlash
 let h = document.querySelector('h1')
 let ul = document.querySelector('ul')

 console.dir(ul)
//  innerHTML, innerText,outerHTML, outerText, textContent
// before(), after(), prepend(), append(), remove(), createElement()
console.log(h.innerText);
// h.innerText = '<i>Salom dunyo</i>'
// console.log(h.innerText);
// h.innerHTML = `<i>IT PARK</i>`
// console.log(h.textContent);
// h.textContent = `<i>Salom dunyo</i>`
console.log(h.outerHTML);
console.log(h.outerText);
h.outerHTML = '<i>Salom dunyo</i>'
// h.outerText = 'Salom Dunyo'
let numbers = [1,2,3,4,5,6 ]
for(let i = 0; i < numbers.length; i++ ){
    const item = numbers[i];

    let li = document.createElement('li')
    console.log(li);
    li.innerHTML = item
    // ul.append(li)
}
h.remove()

// Agar 25 > before
// Agar 25 < 50 prepend
// Agar 50 < 75 append
// Agar 75 < 100 after

for (let a = 0; a < 100; a++){
    let li = document.createElement('li')
    li.innerText = a 
    if (a < 25){
        ul.before(li)
    } else if (a >= 25 && a < 50) {
      ul.prepend(li)
    }else if (a >= 50 && a < 75) {
        ul.append(li)
    }else {
        ul.after(li)
    }
}
