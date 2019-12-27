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

window.findSolution = function(row, n, board, validator, callback) {
  // if all rows exhausted, this is a valid solution.
  if (row === n) {
    return callback();
  }

  // iterate over possible decisions
  for (var i = 0; i < n; i++) {
    // place a piece
    board.togglePiece(row, i);
    // recurse into remaining problem
    if (!board[validator]()) {
      var result = findSolution(row + 1, n, board, validator, callback);
      if (result) {
        return result; // EJECT
      }
    }
    // unplace a piece
    board.togglePiece(row, i);
  }
};


window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var x = 0;
  var y = 0;
  var counter = 0;
  while (counter < n) {
    solution.togglePiece(y, x);
    counter++;
    x++;
    y++;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solution = new Board( {n:n} );
  let solutionCount = 0;

  function innerRook(q, col) {
    if (q === n) {
      solutionCount++;
      return;
    }
    solution.togglePiece(q, col);
    if (solution.hasAnyRooksConflicts()) {
      solution.togglePiece(q, col);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        innerRook(q+1, i);
      }
    }
    solution.togglePiece(q, col);
    return;
  }

  innerRook(0, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var board = new Board({n: n});

  var solution = findSolution(0, n, board, 'hasAnyQueensConflicts', function() {
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  });
  // If no solution exists, return the original unaltered board
  solution = solution || board.rows();
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
// window.countNQueensSolutions = function(n) {
//   var solution = new Board({n: n});
//   var solutionCount = 0;
//   var solutionFound = false;
//   if (n === 0) {
//     return 1;
//   }

//   var innerQueen = function(q, x, y) {
//     if (q === 0) {
//       solutionCount++;
//       solutionFound = true;
//       return;
//     }
//     if (!solution._isInBounds(y, x)) {
//       x = x % n;
//     }
//     solution.togglePiece(y, x);
//     if (solution.hasAnyQueensConflicts()) {
//       solution.togglePiece(y, x);
//       return;
//     }
//     x += 2;
//     for (var j = 0; j < n; j++) {
//       if (solutionFound) {
//         solutionFound = false;
//         break;
//       }
//       innerQueen(q - 1, x + j, y + 1);
//     }
//     solution.togglePiece(y, x - 2);
//     return;
//   };

//   for (var i = 0; i < n; i++) {
//     innerQueen(n, i, 0);
//   }

//   console.log('Number of solutions for ' + n + ' queens:', solutionCount);
//   return solutionCount;
// };

window.countNQueensSolutions = function(n) {
  var solution = new Board({n: n});
  var solutionCount = 0;

  var innerQueen = function(q) {
    if (q === n) {
      solutionCount ++;
      return;
    }

    for (let i = 0; i < n; i++) {
      solution.togglePiece(q, i);
      if (!solution.hasAnyQueensConflicts()) {
        innerQueen(q+1);
      }
      solution.togglePiece(q, i);
    }
  };

  innerQueen(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};