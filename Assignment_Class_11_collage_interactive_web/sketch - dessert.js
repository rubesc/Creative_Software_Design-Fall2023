document.addEventListener('DOMContentLoaded', function () {

  //an array holding links to all of the images (some of the repeat)
  let imgLinks = [
    'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1587563974073-6dabdbbadac1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1612639267275-7c4ae6a12d84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1587563974670-b5181b459b30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1587563974073-6dabdbbadac1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1612639267275-7c4ae6a12d84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1587563974670-b5181b459b30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60', 
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
