

// newdiv = document.createElement('div');
// document.querySelector('body').appendChild(newdiv);
// console.log('HI IM WORKING');

// const obj = { name: 'omar' };


// create a new element 
let x = document.createElement('div') ; // create element
x.classList.add('btn'); // add class to element
x.classList.remove('btn')
x.classList.add('testing'); 


x.innerHTML = '<p> the first row </p> <p> the second row </p>'
// x.innerText = 'wow my first real javascript element'
// x.style.color = 'red'
// x.style['transform'] = 'skew(50deg)'


// Add new element to "container "
document.querySelector('.container').appendChild(x);


console.log(x)
console.log(document.querySelector('.container'))