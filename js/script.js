$(document).ready(function(){

  $('#random-btn').on('click', function() {
    randomNum(); 
    this.innerHTML = 'Another Number'; 
  });

  $('#hide-btn').on('click', function() {
    hideNumber();
  });

  $("#roll-btn").on("click", function() {
    roll();
    $(this).html("Roll Again");
  });

  $("#hide-dice-btn").on("click", function() {
    hideDice();
  })

});

function randomNum() {
  var min = document.getElementById('min').value - 1;
  var max = document.getElementById('max').value;

  if(max < min) {
    alert("You entered a wrong range! Make sure you make your maximum number bigger than your minimum number.");
  } else {
    var random = Math.floor(min + (Math.random() * (max - min) + 1));

    document.getElementById('random').innerHTML = "<p class='small'>Your number is</p>" + random;
    document.getElementById('random').style.display = "block";
    return 3;
  }
}

function hideNumber() {
  document.getElementById('random').innerHTML = "<i class='small'>Random Number Generator</i>";
  document.getElementById('random-btn').innerHTML = "Random Number";
}

function pickColor() {
  var colors = ["red", "orange", "yellow", "green", "lightblue", "skyblue", "blue", "purple", "pink", "violet", "indigo", "black", "white", "tomato", "powderblue"];

  var color = colors[Math.floor(Math.random() * colors.length)];
  
  document.getElementById('randcolor').innerHTML = "<p class='small'>Your color is</p>" + color.toUpperCase();
  document.getElementById('randcolor').style.color = color;
}

function hideColor() {
  document.getElementById('randcolor').innerHTML = "<i class='small'>Pick Any Random Colors</i>";
  document.getElementById('randcolor').style.color = "black";
  document.getElementById('color-btn').innerHTML = "Random Color";
}

function roll() {
  var dice = ['./img/dice-1.png', './img/dice-2.png', './img/dice-3.png', './img/dice-4.png', './img/dice-5.png', './img/dice-6.png'];

  var result = dice[Math.floor(Math.random() * dice.length)];

  $("#dice").html("<img src='" + result + "' width='50%' alt='Dice Image'>");
}

function hideDice() {
  $("#roll").find("#dice").html("<i class='small'>Roll the Dice</i>").end().find("#roll-btn").html("Roll!")
}
