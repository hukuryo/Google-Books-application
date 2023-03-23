const btn = document.getElementById("btn");

btn.addEventListener('click', async() => {
    const textValue = document.getElementById("formText").value;
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${textValue}`);
    const data = await res.json();
    for(let i = 0; i < data.items.length; i++){
        const bookTitle = data.items[i].volumeInfo.title;
        const bookItem = document.getElementById("bookItem");
        bookItem.innerHTML = `
                <div class="container">
                <div class="col">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div class="card-body">
                            <p class="card-text">sample</p>
                            <div class="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    // const items = data.items.map(item => {
    //     var vi = item.volumeInfo;
    //     return {
    //         title: vi.title,
    //         description: vi.description,
    //         link: vi.infoLink,
    //         image: vi.imageLinks ? vi.imageLinks.smallThumbnail : '',
    //     }; 
    // });
})
