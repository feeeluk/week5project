const bookList = [{
    bookTitle: "The Bee Sting",
    bookAuthor: "Paul Murray",
    URL: "https://i5.walmartimages.com/seo/The-Bee-Sting-Hardcover-9780374600303_557a4c21-e72a-44f2-b354-616dedb2d1e8.d227ca4a124f57c03cc4549b49a7edf9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    alt: "A cream cover with a bee in the centre flying down towards the bottom right corner",

},
{
    bookTitle: "YellowFace",
    bookAuthor: "R. F. Kuang",
    URL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTj5Q8rA4EUa0oNQN8yBrNdnzixQz41IjL8Xf7ozuxTDum8QxLD",
    alt: "A yellow cover with a pair of eyes looking off to the side",

},
{
    bookTitle: "Birnam Wood",
    bookAuthor: "Eleanor Catton",
    URL: "https://i.cbc.ca/1.6736534.1675455039!/fileImage/httpImage/image.jpg_gen/derivatives/original_620/book-cover-birnam-wood-by-eleanor-catton.jpg",
    alt: "A monochrome picture of a forest, the field and trees white, the sky black"
}]

const locationOfBookList = document.getElementById("bookList");
const showInfo = document.getElementById("showInfo")

let currentImgIndex = 0;

const prevBtn = document.getElementById("previousImg")
const nextBtn = document.getElementById("nextImg")
const aria = document.getElementById("announcer")

prevBtn.addEventListener("click", function () {
    book(-1);
})

nextBtn.addEventListener("click", function () {
    book(1);
})

function book(newBook) {
    currentImgIndex = currentImgIndex + newBook;

    if (currentImgIndex > bookList.length - 1) {
        currentImgIndex = 0;
    }
    if (currentImgIndex < 0) {
        currentImgIndex = bookList.length - 1;
    }
    createDisplayImg(bookList[currentImgIndex]);
}

function createPicList(currentImgIndex) {
    for (let i = 0; i < currentImgIndex.length; currentImgIndex = currentImgIndex + 1) {
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        let h4 = document.createElement("h4")


        img.src = currentImgIndex[i].URL;
        h3.textContent = bookList.bookTitle
        h4.textContent = bookList.bookAuthor

        img.setAttribute("tabindex", "0");
        img.classList("thumb-img");

        img.addEventListener("click", function () {
            console.log(bookList[i]);
            book = i;
            console.log(currentImgIndex)
            createDisplayImg(bookList[i])

        });

        locationOfBookList.appendChild(img)

    }
}

createPicList(bookList);

function createDisplayImg(Picobj) {
    const aria = document.getElementById("aria");
    aria.textContent = Picobj.alt;
    showpic.innerHTML = "";
    let imgTag = document.createElement("img");
    imgTag.classList.add("main-pic");
    imgTag.src = Picobj.URL;
    imgTag.src = Picobj.alt;
    showpic.appendChild(imgTag);

}