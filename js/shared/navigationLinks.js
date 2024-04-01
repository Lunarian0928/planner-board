export class navigationLink {
    constructor(textContent, href) {
        this.textContent = textContent;
        this.href = href;
    }
}

export const navigationLinks = [
    new navigationLink("홈", "./index.html"),   
    new navigationLink("github", "https://github.com/Lunarian0928"),
]

