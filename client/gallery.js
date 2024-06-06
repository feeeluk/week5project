//An array of objects – the objects being book covers, authors and books.

const bookList = [
  {
    bookTitle: "The Bee Sting",
    bookAuthor: "Paul Murray",
    URL: "./images-gallery/00.png",
    alt: "THE BEE STING by Paul Murray | 'The Bee Sting' is the story of the Barnes family, set in contemporary Ireland written with considerable wit and compassion",
  },

  {
    bookTitle: "YellowFace",
    bookAuthor: "R. F. Kuang",
    URL: "./images-gallery/01.jpg",
    alt: "YELLOWFACE by R.F Kuang | A satire of racial diversity in the publishing industry",
  },
  {
    bookTitle: "Birnam Wood",
    bookAuthor: "Eleanor Catton",
    URL: "./images-gallery/02.jpg",
    alt: " BIRNAM WOOD by Eleanor Catton | Birnam Wood follows members of a guerilla gardening collective as they undertake a new projct on abandoned farmland",
  },
  {
    bookTitle: "Lessons in Chemeistry",
    bookAuthor: "Bonnie Garmus",
    URL: "./images-gallery/03.jpg",
    alt: "LESSONS IN CHEMISTRY by Bonnie Garmus | An uplifting summer book about a chemist who becomes a TV chef",
  },
  {
    bookTitle: "Butter",
    bookAuthor: "Asako Yuzuki",
    URL: "./images-gallery/04.jpg",
    alt: "BUTTER by Asako Yuzuki | A Japanese bestseller about a gourmet cook/serial killer and the journalist intent on cracking her case",
  },
];

//pulled through the div location for where the gallery will be from HTML & the location for where the selected image will pop up from HTML.
const locationOfBookList = document.getElementById("bookList");
const showInfo = document.getElementById("showInfo");

//current image is "0" - this will help us to use he for to flick through the pics.
let currentImgIndex = 0;

const prevBtn = document.getElementById("previousImg");
const nextBtn = document.getElementById("nextImg");

const aria = document.getElementById("announcer");

prevBtn.addEventListener("click", function () {
  book(-1);
});

nextBtn.addEventListener("click", function () {
  book(1);
});

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

// function createPicList(bookList) {
//   for (let i = 0; i < bookList.length; bookList = bookList + 1) {
//     let img = document.createElement("img");

//     img.src = bookList[i].URL;
//     img.alt = bookList[i].alt;

//     img.setAttribute("tabindex", "0");
//     img.classList.add("thumb-img");
//     img.addEventListener("click", function () {
//       console.log(bookList[i]);
//       book = i;
//       console.log(currentImgIndex);
//       createDisplayImg(bookList[i]);
//     });

//     locationOfBookList.appendChild(img);
//   }
// }
createDisplayImg(bookList[0]);
// createPicList();

function createDisplayImg(Picobj) {
  const aria = document.getElementById("aria");
  aria.textContent = Picobj.alt;
  showInfo.innerHTML = "";
  let imgTag = document.createElement("img");
  imgTag.classList.add("main-pic");
  imgTag.src = Picobj.URL;
  imgTag.alt = Picobj.alt;
  showInfo.appendChild(imgTag);
  // if (!(imgTag.src)) {
  //   imgTag.src = bookList[0].URL;
  //   imgTag.alt = bookList[0].alt;

  // };
}
