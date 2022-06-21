let btn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// start links
let links = document.querySelectorAll(".navbar-nav a");
links.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});