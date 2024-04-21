import Enums from 'src/Enums.js';
import checkAxisThreat from 'src/MoveScripts/CheckAxisThreat';

function displayBishopThreats(currentPieceRow, currentPieceCol, whitesTurn, squares) {
    let miscSquares = Array(8).fill(null).map(()=>Array(8).fill(null));
    if ((whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.blackBishop) 
        || (!whitesTurn && squares[currentPieceRow][currentPieceCol]===Enums.whiteBishop)){
        return miscSquares; 
    }
    // up and left "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,-1,-1,squares,miscSquares,whitesTurn);
    // up and right "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,+1,-1,squares,miscSquares,whitesTurn)
    // down and left "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,-1,+1,squares,miscSquares,whitesTurn)
    // down and right "line of sight"
    miscSquares=checkAxisThreat(currentPieceRow,currentPieceCol,+1,+1,squares,miscSquares,whitesTurn)
    miscSquares[currentPieceRow][currentPieceCol]="selected";
    return miscSquares; 
}

export default displayBishopThreats; 