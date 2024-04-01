import { initSpecificButton } from "./specificButton.js";
import { initSettingModal } from "../modal/settingModal.js";

var isSettingModalOpen = false;

export function toggleSettingModal() {
    isSettingModalOpen = !isSettingModalOpen;
}

function settingHandler() {
    const content = document.getElementById("content");
    const modalDiv = initSettingModal();
    if (!isSettingModalOpen) {
        content.appendChild(modalDiv);
        isSettingModalOpen = true;
    }
}

export function initSettingButton() {
    const settingButton = initSpecificButton("setting-button", "settings", settingHandler);
    return settingButton;
}