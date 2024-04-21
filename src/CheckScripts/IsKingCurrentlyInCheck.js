import Enums from "../Enums";
import checkThreatenedSquares from "./CheckThreatenedSquares";

// Function to detect if King is CURRENTLY in check. 
// Will be called recursively after prospective moves to see if the move gets the king out of check. 
function isKingCurrentlyInCheck(kingColor, squares, playerColor){
    let allThreatenedSquares; 
    if (kingColor==="white") {
      for (let i=0; i<8; i++){
        for (let j=0; j<8; j++){
          if (squares[i][j]===Enums.whiteKing){
            allThreatenedSquares = checkThreatenedSquares("Black",squares,playerColor); 
            if (allThreatenedSquares[i][j]==="threatened"){
              return true; 
            }
          }
        }
      }
    }
    else if (kingColor==="black"){
      for (let i=0; i<8; i++){
        for (let j=0; j<8; j++){
          if (squares[i][j]===Enums.blackKing){
            allThreatenedSquares = checkThreatenedSquares("White",squares,playerColor); 
            if (allThreatenedSquares[i][j]==="threatened"){
              return true; 
            }
          }
        }
      }
    }
    return false; 
}

export default isKingCurrentlyInCheck; 