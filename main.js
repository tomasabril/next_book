document.getElementById("btn-load").onclick = loadFile;
document.getElementById("btn-calculate").onclick = sortAndShowBooks;
var books;


function loadFile() {
    console.log('load file')
    // load json with list of book from remote location
    var requestUrl = document.getElementById("input-file").value;
    var request = new XMLHttpRequest();
    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        books = request.response;
        console.log(books)
        // sortAndShowBooks();
    };
}

function sortAndShowBooks() {
    // based on parameters sort all books
    if (books == null) {
        alert("load books first");
    }

    // diplay result on page
    var result = document.getElementById('result');
    for (var i = 0; i < books.length; i++) {
        var div = document.createElement('div');
        div.innerHTML =
            '<h3>books[i].title </h3>\
            <p>books[i].author</p>'
        result.appendChild(div);
    }

}
