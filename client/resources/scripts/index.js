// let books = [
//     {
//         title: "Way of Kings",
//         author: "Bandon Sanderson",
//         categories: ["Fiction", "Fantasy", "Magic"]
//     },
//     {
//         title: "Mistborn",
//         author: "Bandon Sanderson",
//         categories: ["Fiction", "Fantasy", "Magic"]
//     }
// ]
let books = []

function handleOnLoad(){
    let html = `
        <button onclick = "handleShowList()">Show List</button>
        <button onclick = "handleAddBook()">Add Book</button>
    `
    document.getElementById('app').innerHTML = html
}

function handleAddBook(){
    let html = `
        <form onsubmit="return false;" method="post">
            <label for="updateTitle">Book Title</label>
            <input type="text" name="updateTitle" id="updateTitle"/>
            <label for="updateAuthor">Book Author</label>
            <input type="text" name="updateAuthor" id="updateAuthor"/>
            <br>
            <input type="checkbox" id="category1" name="category1" value="Fiction">
            <label for="category1">Fiction</label><br>
            <input type="checkbox" id="category2" name="category2" value="Fantasy">
            <label for="category2">Fantasy</label><br>
            <input type="checkbox" id="category3" name="category3" value="Magic">
            <label for="category3">Magic</label><br>
            <input type="submit" value="Submit" onclick="postBook()">          
        </form>
    `
    document.getElementById('app').innerHTML = html
}

async function postBook(){
    let book = {
        title: document.getElementById("updateTitle").value,
        author: document.getElementById("updateAuthor").value,
        categories: []
    }
    if(document.getElementById("category1").checked == true){
        book.categories.push(document.getElementById("category1").value)
    }
    if(document.getElementById("category2").checked == true){
        book.categories.push(document.getElementById("category2").value)
    }
    if(document.getElementById("category3").checked == true){
        book.categories.push(document.getElementById("category3").value)
    }  

    const postBookApiUrl = "http://localhost:5254/api/book";

    let response = await fetch(postBookApiUrl, {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(book)
    })

    console.log(response)

}

async function handleShowList(){

    let response = await fetch("http://localhost:5254/api/book")
    let json = await response.json()
    let books = json
    let html = `
        <table>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Categories</th>
        </tr>
    `

    books.forEach(book => {
        html += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.categories}</td>
            </tr>
       `
    })
    html += '</table>'
    document.getElementById('app').innerHTML = html
}