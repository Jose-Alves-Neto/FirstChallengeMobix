/*
  Hourglass.js

  This is my solution to the hourglass problem.
  @author: José Alves de Figueiredo Neto
*/

//I creates the hourglass array
const SetupArray = (n) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }
  return arr
}

//I create the string representation of the hourglass
const prettyPrint = (array) => {
  let str = '';
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      str += array[i][j];
    }
    str += '\n';
  }
  return str;
}

//I fill the hourglass with the sand and models the format
const Hourglass = (n) => {
  const height = parseInt(n);
  const hourglass = SetupArray(n);

  for (let x = 0; x < height; x++) {
    for (let y = 0; y < height-1; y++) {
      if (y == 0 || y == height-1) {
        hourglass[x][y]="#";
      } else if ((y <= x - 1 || y >= height - x) && x < (height)/2) {
        hourglass[x][y]=" ";
      } else if ((y > x || y < height - x - 1) && x >= (height)/2) {
        hourglass[x][y]=" ";
      } else {
        hourglass[x][y]="#";
      } 
    }
    hourglass[x][height-1]="#";
  }
  return hourglass;
}

//I calculate the new state of the hourglass
const State = (hourglass, state) => {
  const hourglass_clone = hourglass;
  const length = hourglass.length;

  //Iterates through the top half of the hourglass
  for (let y = 0; y < length - 1; y++) {
    for (let x = 0; x < length / 2; x++) {
      if (x == y || x == length - y - 1 || y == 0 || x == 0 || x == length - 1) {
        continue;
      } else if (x <= state + 1) {
        hourglass_clone[x][y] = " ";
      }
    }
  }

  //Iterates for the bottom half of the hourglass
  for (let j = 0; j < length - 1; j++) {
    for(let i = ((length-(length%2)) / 2); i < hourglass_clone.length; i++) {
      if (i == j || j == length - i - 1 || i == length - 1 || j == 0 || i == length - 1) {
        continue;
      } else if (i <= length - state - 3) {
        hourglass_clone[i][j] = " ";
      }
    }
  }
  return hourglass_clone;
}

var readline = require('readline');

var read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

read.question("Write the height of your hourglass (>= 20): ", function(height) {
  
  for(let state=0; state < (height-4)/2; state++) {
    setTimeout(() => {
      console.log(prettyPrint(State(Hourglass(height), state)));
    }, state*1000);
  }
  read.close();
});








// ####################
// ####################
// # ################ #
// #  ##############  #
// #   ############   #
// #    ##########    #
// #     ########     #
// #      ######      #
// #       ####       #
// #        ##        #
// #        ##        #
// #       #  #       #
// #      #    #      #
// #     #      #     #
// #    #        #    #
// #   #          #   #
// #  #            #  #
// # #              # #
// ##                ##
// ####################

// ####################
// ####################
// # ################ #
// #  ##############  #
// #   ############   #
// #    ##########    #
// #     ########     #
// #      ######      #
// #       ####       #
// #        ##        #
// #        ##        #
// #       #  #       #
// #      #    #      #
// #     #      #     #
// #    #        #    #
// #   #          #   #
// #  #            #  #
// # #              # #
// ##                ##
// ####################