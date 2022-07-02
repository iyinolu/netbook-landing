import { ANIMATE_CATEGORIES } from "./constants";

const callback: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target.getAttribute("data-animate-category")) {
        case "slideup":
          entry.target.classList.add(ANIMATE_CATEGORIES["slideup"]);
          observer.unobserve(entry.target);
          break;
        case "slideRight":
          entry.target.classList.add(ANIMATE_CATEGORIES["slideRight"]);
          observer.unobserve(entry.target);
          break;
        default:
          break;
      }
    } else {
      switch (entry.target.getAttribute("data-animate-category")) {
        case "slideup":
          entry.target.classList.remove(ANIMATE_CATEGORIES["slideup"]);
          break;
        case "slideRight":
          entry.target.classList.remove(ANIMATE_CATEGORIES["slideRight"]);
          break;
        default:
          break;
      }
    }
  });
};

export const observer = new IntersectionObserver(callback, { threshold: 0 });
