// gwningen





let searchBook = () => {
    let searchText = document.getElementById('searchText').value;
    let url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(json => displaySearchResult(json.docs))
    document.getElementById('searchText').value = '';
}

let displaySearchResult = books => {
    books.forEach(book => {
        console.log(book.title);
    })
}












