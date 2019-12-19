/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme
  // outer loop to iterate over indexes in top row i - n

    // Inner queen function to push results to solutionCount
    // function innerQueen(n, x, y)
    // if n === 0
      // solutionCount ++ 
    // determine if x and y are in bounds
      // if not set new y or x coordinate to be remainder of n - (x || y) and add to 0 
    // setQueen(x, y)
    // if (queen has conflicts)
      // return out of function
    // else 
    // for indexes in second row 
      // innerQueen(n-1, y-1, x+=2)

    // call innerQueen(n, i, 0);
  
  //return solutionCount

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
