import Enums from "src/Enums";
import isKingCurrentlyInCheck from "src/CheckScripts/IsKingCurrentlyInCheck";
import displayKnightMoves from "src/MoveScripts/Knights/KnightMoves";
import displayKingMoves from "src/MoveScripts/Kings/KingMoves";
import displayPawnMoves from "src/MoveScripts/Pawns/PawnMoves";
import displayQueenMoves from "src/MoveScripts/Queens/QueenMoves";
import displayRookMoves from "src/MoveScripts/Rooks/RookMoves";
import displayBishopMoves from "src/MoveScripts/Bishops/BishopMoves";
import squaresCombiner from "src/HelperScripts/SquaresCombiner";

function isStalemate(kingColor, squares, pawnColor, enPassantTarget){
    let legalMoves = Array(8).fill(null).map(()=>Array(8).fill(null));
    let pieceMoves; 
    let whitesTurn = (kingColor==="white") ? true : false; 
    if (!isKingCurrentlyInCheck(kingColor, squares, pawnColor)){
      for (let i=0; i<8; i++){
        for (let j=0; j<8; j++){
          if ((whitesTurn && Enums.whitePieces.includes(squares[i][j])) ||
            (!whitesTurn && Enums.blackPieces.includes(squares[i][j]))) {
            if ((whitesTurn && squares[i][j]===Enums.whiteKnight) || (!whitesTurn && squares[i][j]===Enums.blackKnight)){
              pieceMoves = displayKnightMoves(i,j,whitesTurn,squares,pawnColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if ((whitesTurn && squares[i][j]===Enums.whitePawn) || (!whitesTurn && squares[i][j]===Enums.blackPawn)){
              pieceMoves = displayPawnMoves(i,j,whitesTurn,pawnColor,squares,enPassantTarget);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if ((whitesTurn && squares[i][j]===Enums.whiteBishop) || (!whitesTurn && squares[i][j]===Enums.blackBishop)){
              pieceMoves = displayBishopMoves(i,j,whitesTurn,squares,pawnColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if ((whitesTurn && squares[i][j]===Enums.whiteQueen) || (!whitesTurn && squares[i][j]===Enums.blackQueen)){
              pieceMoves = displayQueenMoves(i,j,whitesTurn,squares,pawnColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if ((whitesTurn && squares[i][j]===Enums.whiteKing) || (!whitesTurn && squares[i][j]===Enums.blackKing)){
              pieceMoves = displayKingMoves(i,j,whitesTurn,squares,pawnColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if ((whitesTurn && squares[i][j]===Enums.whiteRook) || (!whitesTurn && squares[i][j]===Enums.blackRook)){
              pieceMoves = displayRookMoves(i,j,whitesTurn,squares,pawnColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
          }
          for (let k=0; k<8; k++){
            if (legalMoves[k].includes("threatened")){
              return false; 
            }
          }
        }
      }
      return true; 
    }
    else{
      return false; 
    }
}

export default isStalemate; 