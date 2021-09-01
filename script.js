// gwningen





let searchBook = () => {
    let searchText = document.getElementById('searchText').value;
    let url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(json => displaySearchResult(json.docs))
    document.getElementById('searchText').value = '';
}

let displaySearchResult = books => {
    let searchResult = document.getElementById('searchResult');
    books.forEach(book => {
        // console.log(book.title);
        let div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}












