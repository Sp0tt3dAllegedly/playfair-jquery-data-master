console.log('Hello Playfair!');

let colorList= ['red', 'pink', 'purple', 'green', 'blue'];



$(document).ready(onReady);

function onReady() {
  console.log('jQuery data is awesome!!!');

  addColorsToDom();
}

function addColorsToDom() {
  for ( color of colorList ) {
$('#container').append(`<li>${color}</li>`);

  }
}