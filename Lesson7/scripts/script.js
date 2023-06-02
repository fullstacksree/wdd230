//get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the intersectionalobserver
const imgOptions = {
  threshold: 1,
  rootMarin: "0px 0px 100px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");
  };
};

//first check to see if intersection obserers s supported
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  //loopomg through each imgage a check status and load if necessary
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}