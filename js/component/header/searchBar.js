var query = "";
var searchAttempt = false;
let searchData = [];

export function initSearchBar() {
    const searchBar = document.createElement("div");
    searchBar.id = "search-bar";

    const searchIcon = initSearchIcon();
    searchBar.appendChild(searchIcon);

    const searchInput = initSearchInput();
    searchBar.appendChild(searchInput);
    
    return searchBar;
}

function attemptSearch() {
    searchData = filterBoardData(query);
    searchAttempt = true;
}

export function getSearchAttmpt() {
    return searchAttempt;
}

export function getSearchData() {
    return searchData;
}

function initSearchIcon() {
    const searchIcon = document.createElement("span");
    searchIcon.classList.add("material-symbols-outlined");
    searchIcon.textContent = "search";

    searchIcon.addEventListener("click", () => {
        attemptSearch();
    })

    return searchIcon;
}

function initSearchInput() {
    const searchInput = document.createElement("input");
    searchInput.id = "search-input";
    searchInput.value = query;
    searchInput.value = "미구현"
    searchInput.addEventListener("change", (event) => {
        query = event.currentTarget.value;
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            attemptSearch();
        } 
        
    });

    return searchInput;
}