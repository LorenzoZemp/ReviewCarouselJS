// DOM Elements
const prevButton = document.getElementById("btn-prev");
const nextButton = document.getElementById("btn-next");
const randomButton = document.getElementById("suprise-me");

const profilePic = document.getElementById("prof-pic");
const profileName = document.getElementById("prof-name");
const profileJob = document.getElementById("prof-job");
const review = document.getElementById("review");

// Mock Reviews
const reviews = [
  {
    id: 1,
    name: "Spongebob",
    job: "Fry Chef",
    img: "./Assets/images/spongebob.jpg",
    review:
      "Zerstoben es schwankende und und euch trüben träne sonst euch. Und der labyrinthisch naht klage ihr früh, lauf die lied gesänge guten manche. Freundschaft lied euch die mich mit wenn jenem ertönt. Das schwankende die.",
  },
  {
    id: 2,
    name: "Jotaro",
    job: "Stand Owner",
    img: "./Assets/images/jotaro.jpg",
    review:
      "Presently or burned deep chamber from more bust unto, and moment and quoth this at placid. He stately door so the my sad as evilprophet, ghastly footfalls as plutonian that than into said, so dreaming it plainly from till the.",
  },
  {
    id: 3,
    name: "Pea Tear Gryphon",
    job: "Professional",
    img: "./Assets/images/peter.jpg",
    review:
      "Avec face vainqueur promettant ce dans. Pontife mal femme la par «la la, au c'est loisirs fait ou ton vois morceau, apres-demain n'est vois et morceau pleurs. Ce fait un.",
  },
];

// set starting item
let currentItem = 0;

//function to load content into DOM element
function loadItem(item) {
  profilePic.src = item.img;
  profileName.textContent = item.name;
  profileJob.textContent = item.job;
  review.textContent = item.review;
}

//load initial item
//DOMContentLoaded fires when page is initially loaded.
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  loadItem(item);
});

prevButton.addEventListener("click", function () {
  currentItem -= 1;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  const item = reviews[currentItem];
  loadItem(item);
  console.log("previous review");
});

nextButton.addEventListener("click", function () {
  currentItem += 1;
  if (currentItem >= reviews.length) {
    currentItem = 0;
  }
  const item = reviews[currentItem];
  loadItem(item);
  console.log("next review");
});

randomButton.addEventListener("click", function () {
  let randNum = Math.floor(Math.random() * Math.floor(reviews.length));
  const item = reviews[randNum];
  currentItem = randNum;
  loadItem(item);
});
