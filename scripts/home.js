const courseTitles = document.querySelectorAll(".course .title")
const navBar = document.querySelector(".main-navbar")
const signUp = document.querySelector("#signup")
courseTitles.forEach((title) => {
  const summary = title.parentElement.parentElement.querySelector(".summary")
  title.addEventListener("click", () => {
    summary.classList.toggle("show-summary")
  })
})
login.addEventListener("click", () => {
  console.log(window.pageYOffset)
})
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset

  if (scrollHeight > 375) {
    navBar.classList.add("fixed-nav")
    signUp.classList.add("block")
  } else {
    navBar.classList.remove("fixed-nav")
    signUp.classList.remove("block")
  }
})
