$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


function pickRandom(min, max) {
  document.getElementById('random').innerHTML = "<p class='small'>Your number is</p>" + Math.floor(Math.random() * (max - min + 1) );
  document.getElementById('random').style.display = "block";
}

function hideNumber() {
  document.getElementById('random').innerHTML = "<i class='small'>Random Numbers between 1 and 100</i>";
  document.getElementById('random-btn').innerHTML = "Random Number";
}

function pickColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  document.getElementById('randcolor').innerHTML = "<p class='small'>Your color is</p>" + color;
  document.getElementById('randcolor').style.color = color;
}

function hideColor() {
  document.getElementById('randcolor').innerHTML = "<i class='small'>Pick Any Random Colors</i>";
  document.getElementById('randcolor').style.color = "black";
  document.getElementById('color-btn').innerHTML = "Random Color";
}
