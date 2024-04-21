import Enums from "src/Enums";

// alternate CheckAxis that doesn't care about putting the king in check. 
function checkAxisThreat(currentPieceRow, currentPieceCol, rowDelta, colDelta, squares, miscSquares, whitesTurn){
    let i=currentPieceRow+rowDelta;
    let j=currentPieceCol+colDelta; 
    while (i < 8 && i >=0 && j < 8 && j >=0) {
        if (squares[i][j]===null){
        miscSquares[i][j]="possible"; 
        }
        else if ((whitesTurn && Enums.whitePieces.includes(squares[i][j]))
        || (!whitesTurn && Enums.blackPieces.includes(squares[i][j]))){
        break; 
        }
        else if ((whitesTurn && Enums.blackPieces.includes(squares[i][j]))
        || (!whitesTurn && Enums.whitePieces.includes(squares[i][j]))){
        miscSquares[i][j]="threatened";
        break; 
        }
        i+=rowDelta;
        j+=colDelta;
    }
    return miscSquares;
}

export default checkAxisThreat; 