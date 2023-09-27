
// newdiv = document.createElement('div');
// document.querySelector('body').appendChild(newdiv);
console.log('HI IM WORKING');

// create a new element 
let x = document.createElement('div') ; // create element
x.classList.add('btn'); // add class to element
x.classList.remove('btn')
x.classList.add('testing'); 


console.log('I have added a new class');

x.innerHTML = '<p> the first row </p> <p> the second row </p>'
// x.innerText = 'wow my first real javascript element'
// x.style.color = 'red'
// x.style['transform'] = 'skew(50deg)'

console.log('I have added innerHTML');

// Add new element to "container "
document.querySelector('.container').appendChild(x);

console.log('append element to a thing in HTML');

console.log(x)
console.log(document.querySelector('.container'))

console.log('The end');