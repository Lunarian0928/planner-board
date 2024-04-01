import { initSpecificButton } from "./specificButton.js";
import { initHelpModal } from "../modal/helpModal.js";

var isHelpModalOpen = false;

export function toggleHelpModal() {
    isHelpModalOpen = !isHelpModalOpen;
}

function helpHandler() {
    const content = document.getElementById("content");
    const modalDiv = initHelpModal();
    if (!isHelpModalOpen) {
        content.appendChild(modalDiv);
        isHelpModalOpen = true;
    }
}

export function initHelpButton() {
    const helpButton = initSpecificButton("help-button", "help", helpHandler);
    return helpButton;
}