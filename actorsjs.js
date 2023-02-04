const actors = [
  {
    game: 1,
    image: "images/alpacino.jpg",
    variant_a: "Daniel Day Lewis",
    variant_b: "Leonardo Dicaprio",
    variant_c: "Jake Gyllenhaal",
    variant_d: "Al Pacino",
    dogru_cavab: "Al Pacino",
  },
  {
    game: 2,
    image: "images/daniel.jpg",
    variant_a: "Leonardo Dicaprio",
    variant_b: "Daniel Day Lewis",
    variant_c: "Al Pacino",
    variant_d: "Jake Gyllenhaal",
    dogru_cavab: "Daniel Day Lewis",
  },
  {
    game: 3,
    image: "images/jake.jpg",
    variant_a: "Al Pacino",
    variant_b: "Leonardo Dicaprio",
    variant_c: "Jake Gyllenhaal",
    variant_d: "Daniel Day Lewis",
    dogru_cavab: "Jake Gyllenhaal",
  },
  {
    game: 4,
    image: "images/leodicaprio.jpg",
    variant_a: "Jake Gyllenhaal",
    variant_b: "Al Pacino",
    variant_c: "Leonardo Dicaprio",
    variant_d: "Daniel Day Lewis",
    dogru_cavab: "Leonardo Dicaprio",
  },
  {
    game: 5,
    image: "images/margot.jpg",
    variant_a: "Emma Stone",
    variant_b: "Scarlett Johansson",
    variant_c: "Emma Watson",
    variant_d: "Margot Robbie",
    dogru_cavab: "Margot Robbie",
  },
  {
    game: 6,
    image: "images/nicole.jpg",
    variant_a: "Nicole Kidman",
    variant_b: "Emma Stone",
    variant_c: "Margot Robbie",
    variant_d: "Emma Watson",
    dogru_cavab: "Nicole Kidman",
  },
];
var question = 0;

let container = document.querySelector(".container");
let img = document.querySelector("img");
let variant_button_1 = document.querySelector(".btn-1");
let variant_button_2 = document.querySelector(".btn-2");
let variant_button_3 = document.querySelector(".btn-3");
let variant_button_4 = document.querySelector(".btn-4");
let dogru = document.querySelector(".dogru-sayi");
let yanlis = document.querySelector(".yanlis-sayi");
let yanlisSayi = 0;
let dogruSayi = 0;
let endingTitle = document.createElement("div");
let endingButton = document.createElement("button");
let randomNumber = Math.floor(Math.random() * actors.length - 1);
addEventListener("DOMContentLoaded", function () {
  img.src = actors[0].image;
  variant_button_1.innerHTML = actors[0].variant_a;
  variant_button_2.innerHTML = actors[0].variant_b;
  variant_button_3.innerHTML = actors[0].variant_c;
  variant_button_4.innerHTML = actors[0].variant_d;
});

variant_button_1.addEventListener("click", function () {
  if (variant_button_1.innerHTML === actors[question].dogru_cavab) {
    dogruSayi++;
    dogru.innerHTML = dogruSayi;
    showAlert(variant_button_1, "green");
    setTimeout(() => {
      checkQuestion(question);
    }, 700);
  } else {
    yanlisSayi++;
    yanlis.innerHTML = yanlisSayi;

    showAlert(variant_button_1, "red");
    setTimeout(() => {
      checkQuestion(question);
    }, 700);
  }
});
variant_button_2.addEventListener("click", function () {
  if (variant_button_2.innerHTML === actors[question].dogru_cavab) {
    dogruSayi++;
    dogru.innerHTML = dogruSayi;
    showAlert(variant_button_2, "green");
    setTimeout(() => {
      checkQuestion(question);
    }, 700);
  } else {
    yanlisSayi++;
    yanlis.innerHTML = yanlisSayi;
    showAlert(variant_button_2, "red");
    setTimeout(() => {
      checkQuestion(question);
    }, 700);
  }
});
variant_button_3.addEventListener("click", function () {
  if (variant_button_3.innerHTML === actors[question].dogru_cavab) {
    dogruSayi++;
    dogru.innerHTML = dogruSayi;
    showAlert(variant_button_3, "green");
    setTimeout(() => {
      checkQuestion(question);
    }, 700);
  } else {
    yanlisSayi++;
    yanlis.innerHTML = yanlisSayi;
    showAlert(variant_button_3, "red");
    setTimeout(() => {
      checkQuestion(question);
    }, 700);
  }
});
variant_button_4.addEventListener("click", function () {
  if (variant_button_4.innerHTML === actors[question].dogru_cavab) {
    dogruSayi++;
    dogru.innerHTML = dogruSayi;
    showAlert(variant_button_4, "green");
    setTimeout(() => {
      checkQuestion(question);
    }, 700);
  } else {
    yanlisSayi++;
    yanlis.innerHTML = yanlisSayi;
    showAlert(variant_button_4, "red");
    setTimeout(() => {
      checkQuestion(question);
    }, 700);
  }
});
function checkQuestion() {
  variant_button_1.disabled = false;
  variant_button_2.disabled = false;
  variant_button_3.disabled = false;
  variant_button_4.disabled = false;
  if (question < actors.length - 1) {
    img.src = actors[question + 1].image;
    variant_button_1.innerHTML = actors[question + 1].variant_a;
    variant_button_2.innerHTML = actors[question + 1].variant_b;
    variant_button_3.innerHTML = actors[question + 1].variant_c;
    variant_button_4.innerHTML = actors[question + 1].variant_d;
    question++;
  } else {
    let endingResult;
    container.innerHTML = "";    
    endingButton.innerHTML = "Basliga donmek ucun tiklayin";
    endingButton.className = "ending-button";
    endingTitle.className = "ending-title";
    endingTitle.innerHTML = "Oyun Bitdi";
    endingResult = document.createElement("div");
    endingResult.className = "ending-result";
    endingResult.innerHTML = `Neticeniz: ${dogruSayi}`
    container.appendChild(endingResult);
    container.appendChild(endingTitle);
    container.appendChild(endingButton);
  }
}



function showAlert(buttonNumber, color) {
  buttonNumber.style = `background-color:${color}`;
  setTimeout(function () {
    buttonNumber.style = "";
  }, 700);
  variant_button_1.disabled = true;
  variant_button_2.disabled = true;
  variant_button_3.disabled = true;
  variant_button_4.disabled = true;
};

endingButton.addEventListener("click",function(){
  window.location.href = "http://127.0.0.1:5500/quizapp/starting%20menu/menu.html"
})