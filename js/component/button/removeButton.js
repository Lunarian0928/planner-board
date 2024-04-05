import { initSpecificButton } from "./specificButton.js";
import { cleanUpBoardData} from "../content/content.js";

function removeHandler() {
    console.log("삭제 버튼 누름");
    cleanUpBoardData();
    location.reload();
}

export function initRemoveButton() {
    const removeButton = initSpecificButton("remove-button", "delete", removeHandler);
    return removeButton;
}