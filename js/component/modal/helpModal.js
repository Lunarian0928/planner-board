import { initModal } from "./modal.js";

export function initHelpModal() {
    const helpModal = initModal("help-modal", "도움말");
    return helpModal;
}