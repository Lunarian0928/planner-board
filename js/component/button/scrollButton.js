import { initSpecificButton } from "./specificButton.js";

function scrollHandler () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
export function initScrollButton() {
    const scrollButton = initSpecificButton("scroll-button", "arrow_upward", scrollHandler);
    return scrollButton;
}

