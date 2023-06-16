//    Write some example JavaScript code that creates a new HTML p element with some text and appends it to the document body. Use jQuery syntax if needed.

const paragraphElement = document.createElement('p');
const textContent = "Sample text for Paragraph";
paragraphElement.textContent = textContent;
document.body.appendChild(paragraphElement);
