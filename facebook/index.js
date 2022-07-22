let likes = document.querySelectorAll(".fa-thumbs-up");
for (let x = 0; x < likes.length; x++) {
  likes[x].addEventListener("click", function () {
    likes[x].style.color = "blue";
  });
}

// // let hamburger = document.querySelector(".menu");
// let menu = document.querySelector(".header-third");
// // hamburger.addEventListener("click", function (e) {
// //   if (menu.style.display == "none") {
// //     menu.style.display = "flex";
// //   } else {
// //     menu.style.display = "none";
// //   }
// // });

// let width = window.innerWidth;
// if (width <= 600) {
//   menu.style.display = "none";
// }
