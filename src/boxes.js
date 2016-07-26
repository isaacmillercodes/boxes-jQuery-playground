(function() {

//Exercise 1:

// $(document).ready(function () {
//   alert('Ready for dom manipulation!')
// })

// (function() {
//   alert('Also ready for dom manipulation!')
// }());

//Exercise 2
// Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"

// $('#secretBox').css('background-color','#fff');
// $('#secretBox').append('<h1>Secret box!</h1>')

// Find all child divs of the first row. Set the class for each div to boxType3.

//$('#row1 div').attr('class', 'box boxType3')

// Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).

// $('#row4 .boxType1 ~ .boxType1').css('display', 'none')

// Change all red boxes to white.

//$('.boxType1').css('background-color', '#fff');

// Get the first two divs in the second row. Take away all styling from the divs.

//$('#row2 div:lt(2)').attr('class', 'box')

// Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.

 $('#container div:not(.row):not(#secretBox)').css('width', '2px')

}());
