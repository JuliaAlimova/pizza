let heroCards = document.querySelector(".hero__cards");
let numberPage = document.querySelector(".card__buttons>span");
let buttonPrev = document.querySelector(".card__button-left");
let buttonNext = document.querySelector(".card__button-right");

let countStart = 0;
let countEnd = 9;
let count = 1;

let arrCards = [
  {
    name: "Neapolitan Pizza",
    img: "img/pizza/pizza_neapolitan.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chicago Pizza",
    img: "img/pizza/pizza_chicago.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chelintanio Pizza",
    img: "img/pizza/pizza_chelintanio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Margarita Pizza",
    img: "img/pizza/pizza_margarita.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Papperoni Pizza",
    img: "img/pizza/pizza_papperoni.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Salami Pizza",
    img: "img/pizza/pizza_salami.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Neapolitan Pizza",
    img: "img/pizza/pizza_neapolitan.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chicago Pizza",
    img: "img/pizza/pizza_chicago.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chelintanio Pizza",
    img: "img/pizza/pizza_chelintanio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chelintanio Pizza",
    img: "img/pizza/pizza_chelintanio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chicago Pizza",
    img: "img/pizza/pizza_chicago.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chelintanio Pizza",
    img: "img/pizza/pizza_chelintanio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Margarita Pizza",
    img: "img/pizza/pizza_margarita.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Papperoni Pizza",
    img: "img/pizza/pizza_papperoni.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Salami Pizza",
    img: "img/pizza/pizza_salami.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Neapolitan Pizza",
    img: "img/pizza/pizza_neapolitan.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chicago Pizza",
    img: "img/pizza/pizza_chicago.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chelintanio Pizza",
    img: "img/pizza/pizza_chelintanio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Margarita Pizza",
    img: "img/pizza/pizza_margarita.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chicago Pizza",
    img: "img/pizza/pizza_chicago.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chelintanio Pizza",
    img: "img/pizza/pizza_chelintanio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Margarita Pizza",
    img: "img/pizza/pizza_margarita.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Papperoni Pizza",
    img: "img/pizza/pizza_papperoni.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Salami Pizza",
    img: "img/pizza/pizza_salami.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Neapolitan Pizza",
    img: "img/pizza/pizza_neapolitan.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chicago Pizza",
    img: "img/pizza/pizza_chicago.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
  {
    name: "Chelintanio Pizza",
    img: "img/pizza/pizza_chelintanio.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },

  {
    name: "Neapolitan Pizza",
    img: "img/pizza/pizza_neapolitan.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    price: "120 грн",
    button: "Деталi",
  },
];

class CreateList {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  createCard() {
    if (this.end > arrCards.length) {
      this.end = arrCards.length;
    }

    for (let index = this.start; index < this.end; index++) {
      const element = arrCards[index];

      let pizzaName = element.name;
      let imgSrc = element.img;
      let description = element.description;
      let pizzaPrice = element.price;
      let buttonCard = element.button;

      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = imgSrc;
      let h2 = document.createElement("h2");
      h2.innerHTML = pizzaName;
      let p = document.createElement("p");
      p.innerHTML = description;
      let span = document.createElement("span");
      span.innerHTML = pizzaPrice;
      let button = document.createElement("button");
      button.innerHTML = buttonCard;

      div.append(img, h2, p, span, button);
      heroCards.append(div);
    }
  }
}

let cards = new CreateList(countStart, countEnd);
cards.createCard();
numberPage.innerHTML = count + " / " + Math.ceil(arrCards.length / 9);

buttonPrev.addEventListener("click", () => {
  if (countStart > 0) {
    countStart -= 9;
    countEnd -= 9;

    heroCards.innerHTML = "";
    let cards = new CreateList(countStart, countEnd);
    cards.createCard();
    count -= 1;
    numberPage.innerHTML = count + " / " + Math.ceil(arrCards.length / 9);
  }
});

buttonNext.addEventListener("click", () => {
  if (countEnd < arrCards.length) {
    countStart += 9;
    countEnd += 9;

    heroCards.innerHTML = "";
    let cards = new CreateList(countStart, countEnd);
    cards.createCard();
    count += 1;
    numberPage.innerHTML = count + " / " + Math.ceil(arrCards.length / 9);
  }
});
