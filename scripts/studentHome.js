const closeCard = document.querySelector(".close")
const flashCard = document.querySelector(".flash-card")

closeCard.addEventListener("click", () => {
  flashCard.classList.add("none")
  console.log("clicked")
})
