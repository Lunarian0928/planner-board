import { BoardInfo } from "../../shared/boardInfo.js";
import { getCurrentDate, getYear, getMonth, getDate, getHours, getMinutes } from "../../shared/currentDate.js";
import { updateBoardData, findIndexOfBoardData, updateTextContentOfBoard } from "../content/content.js";
// 보드 초기화
export function initBoard(boardInfo) {
    const board = document.createElement("div");
    board.classList.add("board");

    const h4 = document.createElement("h4");
    h4.textContent = boardInfo.textContent;
    board.appendChild(h4);

    board.addEventListener('click', () => {
        // 현재 div 안의 내용을 저장
        const previousText = board.textContent.trim();

        // input 요소 생성
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("board");

        // 이전 텍스트를 input 값으로 설정
        input.value = previousText;

        // div 요소를 input 요소로 교체
        board.parentNode.replaceChild(input, board);

        // 포커스를 새로 생성된 input 요소로 이동
        input.focus();

        // input 요소가 포커스를 잃으면 다시 div로 변경
        input.addEventListener('blur', function() {
            const updatedText = input.value.trim();
            if (updatedText !== "") {
                // 이전에 생성된 h3 요소 제거
                const existingH4 = board.querySelector("h4");
                if (existingH4) {
                    board.removeChild(existingH4);
                }
                
                // 새로운 h4 요소 생성하여 추가
                const h4 = document.createElement("h4");
                h4.textContent = updatedText;
                board.appendChild(h4);

                // boardData 업데이트
                const index = findIndexOfBoardData(boardInfo);
                console.log(index); 
                if (index !== -1) {
                    updateTextContentOfBoard(index, updatedText);
                }
            } 
            // 다시 div로 변경
            input.parentNode.replaceChild(board, input);
        });
    });

    return board;    
}

// board를 만드는 함수
function createBoard(boardInfo, isInitial=true) {
    const content = document.getElementById("content");
    const board = initBoard(boardInfo);
    content.appendChild(board);

    if (isInitial) {
        updateBoardData(boardInfo);
    }
}

// boardData를 로드해와 보드 생성하는 함수
export function createBoards(boardData) {
    if (boardData == null) return;

    boardData.forEach((boardInfo) => {
        createBoard(boardInfo, false);
    })
}

// default textContent를 return해주는 함수
function getDefaultBoardTextContent(currentDate) { 
    const year = getYear(currentDate);
    const month = getMonth(currentDate).toString().padStart(2, '0'); 
    const date = getDate(currentDate).toString().padStart(2, '0');
    const hours = getHours(currentDate);
    const minutes = getMinutes(currentDate);

    const textContent = `${year}-${month}-${date} ${hours}시 ${minutes}분에 생성된 보드`;
    return textContent;
}

// newBoard를 초기화하는 함수
export function initNewBoard() {
    const newBoard = document.createElement("div"); 
    newBoard.classList.add("new-board");

    newBoard.addEventListener('click', function() {
        const currentDate = getCurrentDate();
        const boardInfo = new BoardInfo(
            getDefaultBoardTextContent(currentDate),
            currentDate,
            currentDate,
        );
        createBoard(boardInfo);
    });

    const h3 = document.createElement("h3");
    h3.textContent = "새로운 보드 추가";
    newBoard.appendChild(h3);
    return newBoard;
}

