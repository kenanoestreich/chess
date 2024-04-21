import Enums from "../Enums";
import displayBishopMoves from "../MoveScripts/Bishops/BishopMoves";
import displayKnightMoves from "../MoveScripts/Knights/KnightMoves";
import displayPawnMoves from "../MoveScripts/Pawns/PawnMoves";
import displayQueenMoves from "../MoveScripts/Queens/QueenMoves";
import displayKingMoves from "../MoveScripts/Kings/KingMoves";
import displayRookMoves from "../MoveScripts/Rooks/RookMoves";
import squaresCombiner from "../HelperScripts/SquaresCombiner";
import isKingCurrentlyInCheck from "./IsKingCurrentlyInCheck";

function isCheckmate(kingColor,squares, playerColor, enPassantTarget){
    let legalMoves = Array(8).fill(null).map(()=>Array(8).fill(null));
    let pieceMoves;   
    let whitesTurn = (kingColor==="white") ? true : false; 
    if (isKingCurrentlyInCheck(kingColor, squares,playerColor)){
      for (let i=0; i<8; i++){
        for (let j=0; j<8; j++){
          if (((kingColor==="both" || kingColor==="white") && Enums.whitePieces.includes(squares[i][j])) ||
            ((kingColor==="both" || kingColor==="black") && Enums.blackPieces.includes(squares[i][j]))) {
            if (((kingColor==="both" || kingColor==="white") && squares[i][j]===Enums.whiteKnight) || ((kingColor==="both" || kingColor==="black") && squares[i][j]===Enums.blackKnight)){
              pieceMoves = displayKnightMoves(i,j,whitesTurn,squares,playerColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if (((kingColor==="both" || kingColor==="white") && squares[i][j]===Enums.whitePawn) || ((kingColor==="both" || kingColor==="black") && squares[i][j]===Enums.blackPawn)){
              pieceMoves = displayPawnMoves(i,j,whitesTurn,playerColor,squares, enPassantTarget);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if (((kingColor==="both" || kingColor==="white") && squares[i][j]===Enums.whiteBishop) || ((kingColor==="both" || kingColor==="black") && squares[i][j]===Enums.blackBishop)){
              pieceMoves = displayBishopMoves(i,j,whitesTurn,squares,playerColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if (((kingColor==="both" || kingColor==="white") && squares[i][j]===Enums.whiteQueen) || ((kingColor==="both" || kingColor==="black") && squares[i][j]===Enums.blackQueen)){
              pieceMoves = displayQueenMoves(i,j,whitesTurn,squares,playerColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if (((kingColor==="both" || kingColor==="white") && squares[i][j]===Enums.whiteKing) || ((kingColor==="both" || kingColor==="black") && squares[i][j]===Enums.blackKing)){
              pieceMoves = displayKingMoves(i,j,whitesTurn,squares,playerColor);
              legalMoves = squaresCombiner(pieceMoves, legalMoves); 
            }
            if (((kingColor==="both" || kingColor==="white") && squares[i][j]===Enums.whiteRook) || ((kingColor==="both" || kingColor==="black") && squares[i][j]===Enums.blackRook)){
              pieceMoves = displayRookMoves(i,j,whitesTurn,squares,playerColor);
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

export default isCheckmate; 