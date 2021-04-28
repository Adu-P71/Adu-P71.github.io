const form = document.querySelector("form")
const loader = document.querySelector(".loader-body")
const closeError = document.querySelector(".flash-error .close")
const flashError = document.querySelector(".flash-error")
const submitButton = form.querySelector(".submit")
const users = [
  {
    username: "swimmer",
    password: "pass",
  },
  {
    username: "omar",
    password: "password2",
  },
]

const username = document.querySelector("#username")
const password = document.querySelector("#password")
function validate() {
  // console.log(username + "  " + password)
  const empty = username.value === "" || password.value === ""
  const user = users.find(
    (user) =>
      user.username === username.value && user.password === password.value
  )
  return user && !empty
}
closeError.addEventListener("click", () => {
  flashError.classList.remove("block")
})
form.addEventListener("submit", (e) => {
  e.preventDefault()
  loader.classList.add("visible")
  submitButton.innerHTML = "Signing in..."
  const user = validate()
  setTimeout(() => {
    if (user) {
      return (window.location = "index.html")
    }
    flashError.classList.add("block")
    loader.classList.remove("visible")
    submitButton.innerHTML = "Sign in"
    username.value = ""
    password.value = ""
    // window.location = "login.html"
  }, 1000)
})
