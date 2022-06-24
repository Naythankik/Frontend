let likes = document.querySelectorAll(".fa-thumbs-up");
for (let x = 0; x < likes.length; x++) {
  likes[x].addEventListener("click", function () {
    likes[x].style.color = "blue";
  });
}
