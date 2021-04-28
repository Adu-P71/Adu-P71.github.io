const form = document.querySelector("form")
const loader = document.querySelector(".loader-body")
const submitButton = form.querySelector(".submit")
const input = document.querySelector("input[type=password]")
const toolTipText = document.querySelector(".tooltiptext")
console.log(password)
console.log(input)
console.log(toolTipText)
input.addEventListener("focus", () => {
  toolTipText.classList.add("visible")
  setTimeout(() => {
    toolTipText.classList.toggle("visible")
  }, 5000)
})

input.addEventListener("blur", () => {
  toolTipText.classList.remove("visible")
})
form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("submitted")
  loader.classList.add("visible")
  submitButton.value = "Creating account..."
  setTimeout(() => {
    window.location = "login.html"
  }, 1000)
})
