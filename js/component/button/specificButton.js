export function initSpecificButton(id, iconName, handler) {
    const specificButton = document.createElement("div");
    specificButton.id = id;

    const specificIcon = document.createElement("span");
    specificIcon.classList.add("material-symbols-outlined");
    specificIcon.textContent = iconName;

    specificButton.appendChild(specificIcon);

    specificButton.addEventListener('click', () => {
        handler();    
    })
    return specificButton;
}