const btn = document.getElementById("btn");

btn.addEventListener('click', async() => {
    const textValue = document.getElementById("formText").value;
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${textValue}`);
    const data = await res.json();
    const bookItem = document.getElementById("bookItem");
    for(let i = 0; i < data.items.length; i++){
        try{
            // JSONデータの取得
            const bookImg = data.items[i].volumeInfo.imageLinks.smallThumbnail;
            const makeElement = document.createElement("div");
            const bookTitle = data.items[i].volumeInfo.title;
            const bookContent = data.items[i].volumeInfo.description;
            const bookLink = data.items[i].volumeInfo.infoLink;
            makeElement.setAttribute("id", `bookItem${i}`);
            bookItem.appendChild(makeElement);
            const getBookItem = document.getElementById(`bookItem${i}`);
            const setBookElement = `
                <div class="container">
                    <div class="col">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <img src="${bookImg}"><br>
                                <a id="link${i}" class="card-text" target="_blank">${bookTitle}</a>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p>${bookContent}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            getBookItem.innerHTML = setBookElement;
            const link = document.getElementById(`link${i}`);
            link.href = bookLink;
        }catch(e){
            console.log(e.message);
            continue;
        }
    }
})
