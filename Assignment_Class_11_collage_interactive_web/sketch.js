document.addEventListener('DOMContentLoaded', function () {

  //an array holding links to all of the images (some of the repeat)
  let imgLinks = [
    'https://images.pexels.com/photos/812958/pexels-photo-812958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/386148/pexels-photo-386148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1820041/pexels-photo-1820041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1525589/pexels-photo-1525589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2707645/pexels-photo-2707645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/448748/pexels-photo-448748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5277697/pexels-photo-5277697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5326924/pexels-photo-5326924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5326924/pexels-photo-5326924.jpeg',
    'https://images.pexels.com/photos/4321194/pexels-photo-4321194.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/6678111/pexels-photo-6678111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1553959/pexels-photo-1553959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1667004/pexels-photo-1667004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1904849/pexels-photo-1904849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7925889/pexels-photo-7925889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7992270/pexels-photo-7992270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4940754/pexels-photo-4940754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/15638996/pexels-photo-15638996/free-photo-of-aerial-view-of-water-splashing-on-a-rocky-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1802268/pexels-photo-1802268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',


  ];
  
  //for each loop will go through each item in the array
  
  
  
  //same as a for loop, just a simpler syntax since you don't have to specify the start and end
  
 
  
  let container = document.querySelector('#container');
  
  imgLinks.forEach(function(d) {
    console.log(d);
    let newImg = document.createElement('img');
    newImg.src = d;
  
    
    //we've created a new image element, with a 'src' attribute that links to the url
    
    newImg.classList.add('random-image'); // Add a class for styling
    container.appendChild(newImg);
    
    
    //now you have to add randomized styling to place it somewhere on the page
    newImg.style.top = `${Math.random() * 80}%`;
    newImg.style.left = `${Math.random() * 80}%`;
    
    // Add click event listener to remove the image
    newImg.addEventListener('click', function () {
    this.remove();
     });
      
  })

  
});
