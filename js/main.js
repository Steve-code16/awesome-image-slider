const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const listItems = document.querySelector(".carousel .list");
const thumbnails = document.querySelector(".carousel .thumbnail");

nextBtn.onclick = () => {
  showSlider("next");
};

prevBtn.onclick = () => {
  showSlider("prev");
};

const timeRunning = 3000;
const timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItems.appendChild(itemSlider[0]);
    thumbnails.appendChild(itemThumbnail[0]);
    carousel.classList.add("next");
  } else {
    let lastItemPosition = itemSlider.length - 1;
    listItems.prepend(itemSlider[lastItemPosition]);
    thumbnails.prepend(itemThumbnail[lastItemPosition]);
    carousel.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
}
