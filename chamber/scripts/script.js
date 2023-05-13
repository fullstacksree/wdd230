let footerContent = document.querySelector(".footer-content");
let header = document.querySelector("header");
let currentDate = document.querySelector(".current-date");

let date = new Date;

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);

currentDate.innerHTML += fulldate;


let lastModified = document.lastModified;
let modifiedText = " Date of last update: \n"

footerContent.innerHTML += date.getFullYear();
footerContent.innerHTML += " Vizag Chamber of Commerce |";
footerContent.innerHTML += " Sree Ranganath Koonisetti |";
footerContent.innerHTML += " WDD 230 Project |";
footerContent.innerHTML += modifiedText;
footerContent.innerHTML += lastModified;


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.main-links')
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


let days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
  ];
 
let banner = "";
if (days[date.getDay()] == "Monday" || days[date.getDay() == "Tuesday"]) {
    banner = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else {
    banner = "";
}
document.querySelector('.banner-join').innerHTML = banner;

// Lazy-Loading logic
let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  });


if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }