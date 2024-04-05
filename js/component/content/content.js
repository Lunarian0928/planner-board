import { initNewBoard, createBoards } from "./board.js";
import { initScrollButton } from "../button/scrollButton.js";
import { initSettingButton } from "../button/settingButton.js";
import { initHelpButton } from "../button/helpButton.js";
import { initRemoveButton } from "../button/removeButton.js";
import { getSearchAttmpt, getSearchData } from "../header/searchBar.js";

let boardData = [];

let count = 0;

// 컨텐츠 생성 함수
function createContent(boardData) {
    const app = document.getElementById("app");

    const content = initContent();
    app.appendChild(content);

    // 보드 생성
    createBoards(boardData);    
}

// 초기 컨텐츠 생성 함수
function initContent() {
    const content = document.createElement("div");
    content.id = "content";

    // 스크롤 버튼 생성 및 추가
    const scrollButton = initScrollButton();
    content.appendChild(scrollButton);

    // 설정 버튼 생성 및 추가
    const settingButton = initSettingButton();
    content.appendChild(settingButton);
    
    // 도움말 버튼 생성 및 추가
    const helpButton = initHelpButton();
    content.appendChild(helpButton);

    // 삭제 버튼 생성 및 추가
    const removeButton = initRemoveButton();
    content.appendChild(removeButton);

    // 새 보드 생성 버튼 생성 및 추가
    const newBoard = initNewBoard();
    content.appendChild(newBoard);

    return content;
}

// 보드 데이터 초기화 및 로컬 스토리지 저장 함수
export function cleanUpBoardData() {
    boardData = [];
    localStorage.setItem('boardData', JSON.stringify(boardData));
}

// 보드 데이터 반환 함수
export function getBoardDataFromContent() {
    return boardData;
}

// 보드 데이터 반환 함수 (로컬 스토리지)
export function getBoardDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('boardData'));
}

// 보드 데이터 업데이트 함수
export function updateBoardData(boardInfo) {    
    boardData.push(boardInfo);
}

export function findIndexOfBoardData(boardInfo) {
    return boardData.findIndex(info => info === boardInfo);
}

export function updateTextContentOfBoard(index, updatedText) {
    boardData[index].textContent = updatedText;
}

// export function filterBoardData(query) {
//     let searchData = boardData.filter((boardInfo) => {
//         // console.log(boardInfo);
//         console.log(boardInfo.textContent);
//         return (boardInfo.textContent == query);
//     });
//     return searchData;
// }

// export function showSearchData() {
//     const content = document.getElementById("content");
//         content.innerHTML = "";
//     if (getSearchAttmpt()) {
//         createBoards(getSearchData());    
//     }
// }

// 페이지 로드 시 보드 데이터 불러오기
window.onload = () => {    
    boardData = getBoardDataFromLocalStorage();
    createContent(boardData); 
};

window.onbeforeunload = () => {
    localStorage.setItem('boardData', JSON.stringify(boardData));
}