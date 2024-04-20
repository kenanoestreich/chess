import Enums from "../../../../version2/chess-server/src/Enums";

// Helper function for showing pawn threats for checkThreatenedSquares()
function displayPawnThreats(currentPieceRow, currentPieceCol, whitesTurn, playerColor, squares) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    if ((whitesTurn && (squares[currentPieceRow][currentPieceCol]===Enums.blackPawn)) 
        || (!whitesTurn && (squares[currentPieceRow][currentPieceCol]===Enums.whitePawn))){
      return miscSquares; 
    }
  
    if ((playerColor==="both")||(playerColor==="white")){
      // white pawn
      if (whitesTurn){
        if ((currentPieceCol-1)>=0){
          miscSquares[currentPieceRow-1][currentPieceCol-1]="threatened"; 
        }
        if ((currentPieceCol+1)<8){
          miscSquares[currentPieceRow-1][currentPieceCol+1]="threatened"; 
        }
      }
  
      // black pawn
      if (!whitesTurn){
        if ((currentPieceCol-1)>=0){
          miscSquares[currentPieceRow+1][currentPieceCol-1]="threatened"; 
        }
        if ((currentPieceCol+1)<8){
          miscSquares[currentPieceRow+1][currentPieceCol+1]="threatened"; 
        }
      }
      return miscSquares; 
    }
    else {
      // black pawn
      if (!whitesTurn){
        if ((currentPieceCol-1)>=0){
          miscSquares[currentPieceRow-1][currentPieceCol-1]="threatened"; 
        }
        if ((currentPieceCol+1)<8){
          miscSquares[currentPieceRow-1][currentPieceCol+1]="threatened"; 
        }
      }
  
      // white pawn
      if (whitesTurn){
        if ((currentPieceCol-1)>=0){
          miscSquares[currentPieceRow+1][currentPieceCol-1]="threatened"; 
        }
        if ((currentPieceCol+1)<8){
          miscSquares[currentPieceRow+1][currentPieceCol+1]="threatened"; 
        }
      }
      return miscSquares; 
    }
}

export default displayPawnThreats; 