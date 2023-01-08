let cars1 = [
  { Name: `Tesla Roadster`, image: "Tesla Roadster.jpg", Speed: 250 },
  {
    Name: `Aston Martin Valkyrie `,
    image: "Aston Martin Valkyrie.jpg",
    Speed: 250,
  },
  { Name: `McLaren Speedtail`, image: "McLaren Speedtail.jpg", Speed: 251 },
  { Name: `Bugatti Veyron`, image: "Bugatti Veyron.jpg", Speed: 253 },
  {
    Name: `SSC Ultimate Aero TT`,
    image: "SSC Ultimate Aero TT.jpg",
    Speed: 267.8,
  },

  { Name: `Koenigsegg Agera R`, image: "Koenigsegg Agera R.jpg", Speed: 273 },
  {
    Name: `Koenigsegg Agera RS`,
    image: "Koenigsegg Agera-RS.jpg",
    Speed: 277.8,
  },
  { Name: ` SSC Tuatara`, image: "SSC Tuatara.jpg", Speed: 282.9 },
  { Name: `Hennessey Venom F5`, image: "Hennessey-Venom-F5.jpg", Speed: 301 },
];

let cars2 = [
  {
    Name: `Rimac Concept Two Nevera`,
    image: "Rimac Concept Two.jpg",
    Speed: 258,
  },
  { Name: ` Bugatti Chiron`, image: "Bugatti Chiron.jpg", Speed: 261 },
  {
    Name: `Bugatti Veyron Super Sport`,
    image: "Bugatti Veyron Super Sport.jpg",
    Speed: 267.8,
  },
  { Name: `Hennessey Venom GT`, image: "Hennessey Venom GT.jpg", Speed: 270.4 },
  {
    Name: `Bugatti Chiron Super Sport`,
    image: "Bugatti Veyron Super Sport.jpg",
    Speed: 304.7,
  },
  { Name: `Bugatti Bolide`, image: "Bugatti Bolide.jpg", Speed: 310 },
  { Name: ` Koenigsegg Jesko`, image: "Koenigsegg Jesko.jpg", Speed: 312 },
  {
    Name: ` Koenigsegg Jesko Absolut`,
    image: "Koenigsegg Jesko Absolut.webp",
    Speed: 330,
  },
  {
    Name: `Devel Sixteen`,
    image: "Devel Sixteen.jpg",
    Speed: 347,
  },
];

const Again = document.querySelector(".again");
const image1Container = document.querySelector(".image");
const image2Container = document.querySelector(".image2");
const carName = document.querySelector(".name");
const carName2 = document.querySelector(".name2");

const againButton = document.querySelector(".again");
const pickButton1 = document.querySelector(".submit");
const pickButton2 = document.querySelector(".submit2");
const nextButton = document.querySelector(".next");
const info = document.querySelector(".information");
const result = document.querySelector(".playerStat");
const container = document.querySelector(".container");
const score = document.querySelector(".score");
const counts = document.querySelector(".counts");
const points = document.querySelector(".points");
const counter = document.querySelector(".played");
const pick = document.querySelector(".pick");
const modal = document.querySelector(".show-modal");
const modalPoints = document.querySelector(".modal-points");
const modalScore = document.querySelector(".modal-score");
const overlay = document.querySelector(".overlay");

let pickRandomIndex1;
let pickRandomIndex2;
let car1Speed;
let car2Speed;
let playing;
let point = 0;
let count = 0;

// DISPLAY FUNCTION
const display = function () {
  // Generating random number
  pickRandomIndex1 = Math.trunc(Math.random() * cars1.length);
  pickRandomIndex2 = Math.trunc(Math.random() * cars2.length);
  // display image
  image1Container.src = `images/${cars1[pickRandomIndex1].image}`;
  image2Container.src = `images/${cars2[pickRandomIndex2].image}`;
  carName.textContent = `${cars1[pickRandomIndex1].Name}`;
  carName2.textContent = `${cars2[pickRandomIndex2].Name}`;
  //get the car speed
  car1Speed = cars1[pickRandomIndex1].Speed;
  car2Speed = cars2[pickRandomIndex2].Speed;
  //display info
  info.textContent =
    "Click pick to select the fastest of the two cars in the images above .";
  //display background
  container.style.backgroundColor = "grey";
  playing = true;
};
display();

const displayCounter = function () {
  count++;
  counter.textContent = count;
};

//Displaying random images as soon as we refresh
window.addEventListener("load", function () {
  display();
  nextButton.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
//Displaying images when random is clicked
Again.addEventListener("click", function () {
  display();
  point = 0;
  score.textContent = 0;
  score.classList.remove("hidden");
  count = 0;
  counter.textContent = 0;
  counter.classList.remove("hidden");
  pickButton1.classList.remove("hidden");
  pickButton2.classList.remove("hidden");
  nextButton.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  result.textContent =" ";
  points.classList.remove("hidden");
  score.classList.remove("hidden");
  counts.classList.remove("hidden")
});

//Picking the fastest car
pickButton1.addEventListener("click", function () {
  //console.log (car1Speed)
  if (playing) {
    nextButton.classList.remove("hidden");
    playing = false;
    if (car1Speed > car2Speed) {
      info.textContent = `${cars1[pickRandomIndex1].Name} with the speed of ${cars1[pickRandomIndex1].Speed}km/h is faster than 
      ${cars2[pickRandomIndex2].Name} with the speed of ${cars2[pickRandomIndex2].Speed}`;
      result.textContent = "Correct";
      container.style.backgroundColor = "Green";
      point++;
      score.textContent = point;
    } else {
      info.textContent = ` ${cars2[pickRandomIndex2].Name} with the speed of ${cars2[pickRandomIndex2].Speed}km/h is faster than 
    ${cars1[pickRandomIndex1].Name} with the speed of ${cars1[pickRandomIndex1].Speed}km/h`;
      result.textContent = "Wrong";
      container.style.backgroundColor = "red";
    }
    displayCounter();
    gameOver();
  }
});
pickButton2.addEventListener("click", function () {
  if (playing) {
    nextButton.classList.remove("hidden");
    playing = false;
    if (car2Speed > car1Speed) {
      info.textContent = `${cars2[pickRandomIndex2].Name} with the speed of ${cars2[pickRandomIndex2].Speed}km/h 
      is faster than ${cars1[pickRandomIndex1].Name} with the speed of ${cars1[pickRandomIndex1].Speed}km/h `;
      result.textContent = "Correct";
      container.style.backgroundColor = "green";
      point++;
      score.textContent = point;
    } else {
      info.textContent = `${cars1[pickRandomIndex1].Name} with the speed of ${cars1[pickRandomIndex1].Speed}km/h is faster than 
      ${cars2[pickRandomIndex2].Name} with the speed of ${cars2[pickRandomIndex2].Speed}km/h`;
      result.textContent = "Wrong";
      container.style.backgroundColor = "red";
      //console.log(car2Speed)
    }

    displayCounter();
    gameOver();
  }

  //Turning off other buttons after pick is clicked
});
nextButton.addEventListener("click", function () {
  display();
  nextButton.classList.add("hidden");
  result.textContent = " ";
});

function gameOver() {
  if (count === 10) {
    playing = false;
    pickButton2.classList.add("hidden");
    pickButton1.classList.add("hidden");
    counter.classList.add("hidden");
    points.classList.add("hidden");
    score.classList.add("hidden");
    modal.classList.remove("hidden");
    nextButton.classList.add("hidden");
    result.classList.add("hidden")
    modalScore.textContent = point;
    overlay.classList.remove("hidden");
    counts.classList.add("hidden")
  }
}

overlay.addEventListener("click", function (){
  display();
  point = 0;
  score.textContent = 0;
  count = 0;
  counter.textContent = 0;
  pickButton1.classList.remove("hidden");
  pickButton2.classList.remove("hidden");
  nextButton.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
})