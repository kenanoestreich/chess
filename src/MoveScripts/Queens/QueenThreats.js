import Enums from "src/Enums";
import checkAxisThreat from "src/MoveScripts/CheckAxisThreat";

function displayQueenThreats(currentPieceRow, currentPieceCol, whitesTurn, squares) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    if ((whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.blackQueen) 
        || (!whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.whiteQueen)){
      return miscSquares; 
    }
    // up "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,0,-1,squares,miscSquares,whitesTurn)
    // down "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,0,+1,squares,miscSquares,whitesTurn)
    // left "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,-1,0,squares,miscSquares,whitesTurn)
    // right "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,+1,0,squares,miscSquares,whitesTurn)
    // up and left "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,-1,-1,squares,miscSquares,whitesTurn)
    // up and right "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,+1,-1,squares,miscSquares,whitesTurn)
    // down and left "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,-1,+1,squares,miscSquares,whitesTurn)
    // down and right "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,+1,+1,squares,miscSquares,whitesTurn)
    miscSquares[currentPieceRow][currentPieceCol]="selected";
    return miscSquares; 
}

export default displayQueenThreats; 