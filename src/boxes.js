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

// $('#container div:not(.row):not(#secretBox)').css('width', '2px')

//Exercise 3

//Add an on click handler to the container div. Console log the x and y position of the click.

// $('#container').on('click', function(event) {
//   event.preventDefault();
//   console.log(event.pageX + ' , ' + event.pageY);
// })

//Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!

$('.boxType1').append('<a href="http://galvanize.com">Check out Galvanize!</a>');

//For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.

//Write a click handler on the container div. The click handler should turn the container background to black and the background of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.

}());
