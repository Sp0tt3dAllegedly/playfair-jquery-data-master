console.log('Hello Playfair!');

let colorList= ['red', 'pink', 'purple', 'green', 'blue'];



$(document).ready(onReady);

function onReady() {
  console.log('jQuery data is awesome!!!');

  $('#container').on('click', '.color', handleColorClick);

  rendorColorsToDom();
}

function rendorColorsToDom() {
  for ( color of colorList ) {
    let listItemHtml = $(`<li class="color">${color}</li>`);
    listItemHtml.data('name', color);
  $('#container').append(listItemHtml);

  }
}

function handleColorClick() {
  let colorName = $(this).data('name');
  alert(`clicked on ${colorName}!`);
}
