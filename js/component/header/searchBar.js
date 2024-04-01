var query = "";

export function initSearchBar() {
    const searchBar = document.createElement("div");
    searchBar.id = "search-bar";

    const searchIcon = initSearchIcon();
    searchBar.appendChild(searchIcon);

    const searchInput = initSearchInput();
    searchBar.appendChild(searchInput);
    
    return searchBar;
}

export function searchHandler() {
    console.log("query: ", query);
}

function initSearchIcon() {
    const searchIcon = document.createElement("span");
    searchIcon.classList.add("material-symbols-outlined");
    searchIcon.textContent = "search";

    searchIcon.addEventListener("click", () => {
        searchHandler();
    })

    searchIcon.addEventListener("keydown", () => {
        searchHandler();
    })

    return searchIcon;
}

function initSearchInput() {
    const searchInput = document.createElement("input");
    searchInput.id = "search-input";
    searchInput.value = query;

    searchInput.addEventListener("change", (event) => {
        query = event.currentTarget.value;
    });
    return searchInput;
}