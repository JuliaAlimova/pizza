let sections = document.querySelectorAll("section");
let burgerMenuImg = document.querySelector(".burgerMenu>img");
let index = document.querySelector(".index");
let footer = document.querySelector(".footer");
let mobileMenu = document.querySelector(".mobileMenu");

let header = document.querySelector(".header");
let nav = document.querySelector(".header__content>nav");
let spanLogoName = document.querySelector(".header__logo span");
let icons = document.querySelector(".icons");

let burgerMenu = document.querySelector(".burgerMenu");
let logoName = document.querySelector(".logo__name");

burgerMenuImg.addEventListener("click", () => {
  if (
    burgerMenuImg.src ==
    "file:///C:/Users/work/Projects/pizzeria/app/img/sendvich-menu.png"
  ) {
    burgerMenuImg.src = "img/charm_menu-hamburger.png";
    index.innerHTML = "";
    footer.remove();

    index.style.justifyContent = "flex-start";
    index.style.alignItems = "flex-start";
    index.style.paddingTop = "130px";
    index.style.paddingLeft = "20px";
    index.style.height = "100vh";

    mobileMenu.style.display = "block";
    index.append(mobileMenu);

    window.addEventListener("resize", () => {
      let compStyle = window.innerWidth;
      if (compStyle > 375) {
        nav.style.display = "none";
        spanLogoName.style.display = "none";
        icons.style.display = "none";
        burgerMenu.style.display = "block";
        logoName.style.display = "block";
      }
    });
  } else if (
    burgerMenuImg.src ==
    "file:///C:/Users/work/Projects/pizzeria/app/img/charm_menu-hamburger.png"
  ) {
    window.addEventListener("resize", () => {
      let compStyle = window.innerWidth;

      if (compStyle > 375) {
        nav.removeAttribute("style");
        spanLogoName.removeAttribute("style");
        icons.removeAttribute("style");
        burgerMenu.removeAttribute("style");
        logoName.removeAttribute("style");
      }
    });

    nav.removeAttribute("style");
    spanLogoName.removeAttribute("style");
    icons.removeAttribute("style");
    burgerMenu.removeAttribute("style");
    logoName.removeAttribute("style");

    burgerMenuImg.src = "img/sendvich-menu.png";
    index.innerHTML = "";
    index.removeAttribute("style");
    sections.forEach((section) => {
      index.append(section);
    });
    index.after(footer);
  }
});
