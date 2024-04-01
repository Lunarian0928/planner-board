import { initSpecificButton } from "./specificButton.js";
import { toggleHelpModal } from "./helpButton.js";
import { toggleSettingModal } from "./settingButton.js";

function closeHandler(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
        switch (modalId) { 
            case "help-modal": {
                toggleHelpModal();
                break;
            }
            case "setting-modal": {
                toggleSettingModal();
                break;
            }
        }
    } 
}

export function initCloseButton(modalId) {
    const closeButton = initSpecificButton("close-button", "close", () => closeHandler(modalId));
    return closeButton;
}