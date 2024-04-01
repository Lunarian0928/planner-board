import { initNewBoard, createBoards } from "./board.js";
import { initScrollButton } from "../button/scrollButton.js";
import { initSettingButton } from "../button/settingButton.js";
import { initHelpButton } from "../button/helpButton.js";
export const boardData = [];


function createContent() {
    const content = initContent();
    const app = document.getElementById("app");

    app.appendChild(content);
    
    // div.content가 생성되고 나서 createBoard(textContent) 함수를 실행시킬 수 있음
    createBoards(boardData);
}

function initContent() {
    const content = document.createElement("div");
    content.id = "content";

    const scrollButton = initScrollButton();
    content.appendChild(scrollButton);

    const settingButton = initSettingButton();
    content.appendChild(settingButton);
    
    const helpButton = initHelpButton();
    content.appendChild(helpButton);

    const newBoard = initNewBoard();
    content.appendChild(newBoard);
    return content;
}

createContent();