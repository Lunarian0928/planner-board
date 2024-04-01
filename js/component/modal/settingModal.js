import { initModal } from "./modal.js";

export function initSettingModal() {
    const settingModal = initModal("setting-modal", "디스플레이 세팅");
    return settingModal;
}