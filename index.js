// Your code here
var dodger = document.getElementById("dodger");
//dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.left; // "180px"
// dodger.style.bottom; // "0px"
dodger.style.bottom = "100px";
dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
//   });

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       var leftNumbers = dodger.style.left.replace("px", "");
//       var left = parseInt(leftNumbers, 10);
   
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    //console.log(leftNumbers);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
   //console.log("right");
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    console.log(leftNumbers);
   
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

