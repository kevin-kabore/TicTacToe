//create a counter & variables to hold moves
var counter = 1;
var turnX = "X";
var turnO = "O";
var move;

var topLeft = document.getElementById("topLeft");
var topMid = document.getElementById("topMid");
var topRight = document.getElementById('topRight');

var row1 = document.getElementsByClassName("row1");


var midLeft = document.getElementById("midLeft");
var midMid = document.getElementById("midMid");
var midRight = document.getElementById("midRight");

var bottomLeft = document.getElementById("bottomLeft");
var bottomMid = document.getElementById("bottomMid");
var bottomRight = document.getElementById("bottomRight");

//array of all boxes
var boxes  = document.getElementsByClassName("box");

var button = document.getElementsByTagName("button")[0]



//function to add event listenners
//add event listenner to all boxes
function makeMove(){
  boxes[0].addEventListener('click',function(){
    console.log('click');

    if (boxes[0].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[0].innerHTML= move;
      counter++;
    }
    getWinner()
  });

  boxes[1].addEventListener('click',function(){
    console.log('click');
    if (boxes[1].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[1].innerHTML= move;
      counter++;
    }
    getWinner()
  });


  boxes[2].addEventListener('click',function(){
    console.log('click');
    if (boxes[2].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[2].innerHTML= move;
      counter++;
    }
    getWinner()
  });

  boxes[3].addEventListener('click',function(){
    console.log('click');
    if (boxes[3].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[3].innerHTML= move;
      counter++;
    }
    getWinner()
  });


  boxes[4].addEventListener('click',function(){
    console.log('click');
    if (boxes[4].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[4].innerHTML= move;
      counter++;
    }
    getWinner()
  });


  boxes[5].addEventListener('click',function(){
    console.log('click');
    if (boxes[5].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[5].innerHTML= move;
      counter++;
    }
    getWinner()
  });

  boxes[6].addEventListener('click',function(){
    console.log('click');
    if (boxes[6].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[6].innerHTML= move;
      counter++;
    }
    getWinner()
  });

  boxes[7].addEventListener('click',function(){
    console.log('click');
    if (boxes[7].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[7].innerHTML= move;
      counter++;
    }
    getWinner()
  });

  boxes[8].addEventListener('click',function(){
    console.log('click');
    if (boxes[8].innerHTML ==="") {
      if (counter %2 !== 0) {
        move = turnX;
      } else if (counter %2 === 0) {
        move =turnO;
      }
      boxes[8].innerHTML= move;
      counter++;
    }
    getWinner()
  });

}
makeMove();

//function for reset; called on button click
function reset(){
  counter = 0;
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    console.log("Reset");
  }
}



function getWinner(){
  console.log("Get winnner function called");
  if (topLeft.innerHTML == turnX && topMid.innerHTML == turnX && topRight.innerHTML == turnX) {
      alert("X is the winner!");
} else if (topLeft.innerHTML === turnO && topMid.innerHTML === turnO && topRight.innerHTML === turnO) {
      alert( "O is the winner!");
  } else if (midLeft.innerHTML === turnX && midMid.innerHTML === turnX && midRight.innerHTML === turnX) {
      alert( "X is the winner!");
  } else if (midLeft.innerHTML === turnO && midMid.innerHTML === turnO && midRight.innerHTML === turnO) {
      alert( "O is the winner!");
  } else if (bottomLeft.innerHTML === turnX && bottomMid.innerHTML === turnX && bottomRight.innerHTML === turnX) {
      alert( "X is the winner!");
  } else if (bottomLeft.innerHTML === turnO && bottomMid.innerHTML === turnO && bottomRight.innerHTML === turnO) {
      alert( "O is the winner!");
  } else if (topLeft.innerHTML === turnX && midLeft.innerHTML === turnX && bottomLeft.innerHTML === turnX) {
      alert( "X is the winner!");
  } else if (topLeft.innerHTML === turnO && midLeft.innerHTML === turnO && bottomLeft.innerHTML === turnO) {
      alert( "O is the winner!");
  } else if (topMid.innerHTML === turnX && midMid.innerHTML === turnX && bottomMid.innerHTML === turnX ) {
      alert( "X is the winner!");
  } else if (topMid.innerHTML === turnO && midMid.innerHTML === turnO && bottomMid.innerHTML === turnO ) {
      alert( "O is the winner!");
  } else if (topRight.innerHTML === turnX && midRight.innerHTML === turnX && bottomRight.innerHTML === turnX)  {
      alert( "X is the winner!");
  } else if (topRight.innerHTML === turnO && midRight.innerHTML === turnO && bottomRight.innerHTML === turnO)  {
      alert( "O is the winner!");
  } else if (topLeft.innerHTML === turnX && midMid.innerHTML ===turnX && bottomRight.innerHTML ===turnX) {
      alert( "X is the winner!");
  } else if (topLeft.innerHTML === turnO && midMid.innerHTML ===turnO && bottomRight.innerHTML ===turnO) {
      alert( "O is the winner!");
  } else if (topRight.innerHTML === turnX && midMid.innerHTML === turnX && bottomLeft.innerHTML === turnX) {
      alert( "X is the winner!");
  } else if (topRight.innerHTML === turnO && midMid.innerHTML === turnO && bottomLeft.innerHTML === turnO) {
      alert( "O is the winner!");
  }
}

getWinner()
// var getWinner = function() {
//   if (winnerIs('x')) {
//     console.log( 'x');
//   }
//   if (winnerIs('o')) {
//     return 'o';
//   }
//   return null;
// }
//
// var winnerIs = function(player) {
//   return winsRow(player) || winsColumn(player) || winsDiagonal(player);
// }
//
// var winsRow = function(player) {
//   return allThree(player, cells('a'), cells('b'), cells('c')) ||
//          allThree(player, cells('d'), cells('e'), cells('f')) ||
//          allThree(player, cells('g'), cells('h'), cells('i'));
// }
//
// var winsColumn = function(player) {
//   return allThree(player, cells('a'), cells('d'), cells('g')) ||
//          allThree(player, cells('b'), cells('e'), cells('h')) ||
//          allThree(player, cells('c'), cells('f'), cells('i'));
// }
//
// var winsDiagonal = function(player) {
//   return allThree(player, cells('a'), cells('e'), cells('i')) ||
//          allThree(player, cells('c'), cells('e'), cells('g'));
// }
//
// var allThree = function(player, cellOne, cellTwo, cellThree) {
//   return (cellOne === player) && (cellTwo === player) && (cellThree === player);
// }

//Call functions
