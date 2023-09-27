// function addNumbers(a,b,c) {
//     return a + b + c
// }

// let result = addNumbers(4,1,12);
// console.log('the add numbers result is' , result)

function makeElement(a) {

    // Create a new paragraph element
    let newParagraph = document.createElement("p")

    newParagraph.innerHTML = "This is the text element #" + a;

    // Add a class to the new paragraph
    newParagraph.classList.add("new-text-element");

    let container = document.querySelector(".container");

    container.appendChild(newParagraph);

}

makeElement(1)
makeElement(2)
makeElement(200)
makeElement(2000000)

