import { initCloseButton } from "../button/closeButton.js";

export function initModal(id, title) {
    const modal = document.createElement("div");
    modal.id = id;

    const modalHeader = initModalHeader(id, title);
    modal.appendChild(modalHeader);

    const modalContent = initModalContent(id);
    modal.appendChild(modalContent);

    return modal;
}

function initModalHeader(id, title) {
    const modalHeader = document.createElement("div");
    modalHeader.id = id + "-header";

    const modalTitle = initModalTitle(title);
    modalHeader.appendChild(modalTitle);
    
    const closeButton = initCloseButton(id);
    modalHeader.appendChild(closeButton);

    return modalHeader;
}

function initModalTitle(title) {
    const modalTitle = document.createElement("h3");
    modalTitle.textContent = title;
    
    return modalTitle;
}

function initModalContent(id) {
    const modalContent = document.createElement("div");
    modalContent.id = id + "-content";

    const p = document.createElement("p");
    p.textContent = "추후 구현 예정";
    modalContent.appendChild(p);

    return modalContent;
}