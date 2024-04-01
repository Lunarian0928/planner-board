import { navigationLinks } from "../../shared/navigationLinks.js";
import { initSearchBar } from "./searchBar.js";

function createHeader() {
    var app = document.getElementById("app");
    var header = initHeader();
    app.appendChild(header);
}

function initHeader() {
    var header = document.createElement("div");
    header.id = "header";
    
    var logo = initLogo();
    header.appendChild(logo);

    var searchBar = initSearchBar();
    header.appendChild(searchBar);
    
    var navigationList = initNavigatonList();
    header.appendChild(navigationList);

    return header;
}

function initLogo() {
    var logo = document.createElement("span");
    logo.id = "logo";
    logo.textContent = "Planner";
    
    return logo;
}

function initNavigatonList() {
    var navigationList = document.createElement("ul");
    navigationList.id = "navigation-list";
    navigationLinks.forEach((navigationLink) => {
        var navigationElement = initNavigationElement(navigationLink);
        navigationList.appendChild(navigationElement);
    });
    
    return navigationList;
}

function initNavigationElement(navigationLink) {
    var navigationElement = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = navigationLink.textContent;
    a.href = navigationLink.href;
    navigationElement.appendChild(a);

    return navigationElement;
}

createHeader();