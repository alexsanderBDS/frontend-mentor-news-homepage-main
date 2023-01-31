const btnEl = document.querySelectorAll(".btn-mobile-icon");
const headerEl = document.querySelector(".header");

btnEl.forEach((element) => {
  element.addEventListener("click", function () {
    let label = this.getAttribute("aria-label");
    let el;

    switch (label) {
      case "menu outline":
        el = getElement(label);
        el.classList.remove("visible");
        el = getElement("close outline");
        el.classList.add("visible");
        headerEl.classList.add("nav-visible");
        break;

      case "close outline":
        el = getElement(label);
        el.classList.remove("visible");
        el = getElement("menu outline");
        el.classList.add("visible");
        headerEl.classList.remove("nav-visible");
        break;
    }
  });
});

function getElement(label) {
  let el = document.querySelector(`.btn-mobile-icon[aria-label='${label}']`);
  return el;
}
