let btn = document.querySelector(".btn");
let section = document.querySelector(".about-section");
console.log(section);
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo(0, 0);
};
