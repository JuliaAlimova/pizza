let buttonPrev = document.querySelector(".card__button-left");
let buttonNext = document.querySelector(".card__button-right");

let pizzaImg = document.querySelector(".card__img>img");
let pizzaDescr = document.querySelector(".card__description>h2");
let pizzaPrice = document.querySelector(".card__description>p");
let pizzaDiscount = document.querySelector(".card__discount");

let count = 0;

let arrCards = [
  {
    name: "Neapolitan Pizza",
    img: "img/pizza/pizza_neapolitan.png",
    price: "120 грн",
    discount: "10%",
  },
  {
    name: "Chicago Pizza",
    img: "img/pizza/pizza_chicago.png",
    price: "120 грн",
    discount: "5%",
  },
  {
    name: "Chelintanio Pizza",
    img: "img/pizza/pizza_chelintanio.png",
    price: "120 грн",
    discount: "12%",
  },
  {
    name: "Margarita Pizza",
    img: "img/pizza/pizza_margarita.png",
    price: "120 грн",
    discount: "15%",
  },
  {
    name: "Papperoni Pizza",
    img: "img/pizza/pizza_papperoni.png",
    price: "120 грн",
    discount: "10%",
  },
  {
    name: "Salami Pizza",
    img: "img/pizza/pizza_salami.png",
    price: "120 грн",
    discount: "8%",
  },
];

class CreateList {
  constructor(count) {
    this.count = count;
  }

  createCard() {
    pizzaImg.src = arrCards[count].img;
    pizzaDescr.innerHTML = arrCards[count].name;
    pizzaPrice.innerHTML = arrCards[count].price;
    pizzaDiscount.innerHTML = arrCards[count].discount;
  }
}

let cards = new CreateList(count);
cards.createCard();

buttonPrev.addEventListener("click", () => {
  count -= 1;

  if (count >= 0) {
    let cards = new CreateList(count);
    cards.createCard();
  } else if (count <= 0) {
    count = arrCards.length - 1;
    let cards = new CreateList(count);
    cards.createCard();
  }
});

buttonNext.addEventListener("click", () => {
  count += 1;

  if (count <= arrCards.length - 1) {
    let cards = new CreateList(count);
    cards.createCard();
  } else if (count > arrCards.length - 1) {
    count = 0;
    let cards = new CreateList(count);
    cards.createCard();
  }
  // console.log(count);
});
