let searchBook = () => {
    let searchText = document.getElementById('searchText').value;
    // api load
    let url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(json => displaySearchResult(json.docs))
    // clear search input value
    document.getElementById('searchText').value = '';
}

let displaySearchResult = books => {
    // found result show
    if (books.length === 0) {
        document.getElementById('numFound').innerText = `No Result Found`;
    }
    else {
        document.getElementById('numFound').innerText = `Found ${books.length} Results`;
    }
    let searchResult = document.getElementById('searchResult');
    // clear result
    searchResult.textContent = '';
    // insert each result into main div
    books.forEach(book => {
        let div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6>Author: ${book.author_name}</h6>
                    <h6>First Puslish Year: ${book.first_publish_year}</h6>
                    <h6>Publisher: ${book.publisher.slice(0,4)}</h6>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}





