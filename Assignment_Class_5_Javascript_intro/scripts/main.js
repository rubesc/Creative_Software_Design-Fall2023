// function addNumbers(a,b,c) {
//     return a + b + c
// }

// let result = addNumbers(4,1,12);
// console.log('the add numbers result is' , result)




function makeElement(a) {

    // Create a new paragraph element
    let newParagraph = document.createElement("p")

    console.log('we have created a new paragraph element')

    // Add text content to paragraph
    newParagraph.innerHTML = "This is the text element #" + a;

    console.log('we have added text content to the paragraph, the text is: ' , a )

    // Add a class to the new paragraph
    newParagraph.classList.add("new-text-element");

    console.log('we have added a class to the new paragraph')

    // Find the container element by its class
    let container = document.querySelector(".container");

    console.log('we have found the container element by its class')

    // Append the new paragraph to the container
    container.appendChild(newParagraph);

    console.log('we have appended the new paragraph to the container')

}


// run the function (multiple times)
// makeElement(1)
// makeElement(2)
// makeElement(200)
makeElement(2000000)




