const userInput = document.querySelector(".user-input");
const searchList = document.querySelectorAll("li");

userInput.addEventListener("keyup", function () {
  const userSearch = userInput.value.toLowerCase();

  for (let i = 0; i < searchList.length; i++) {
    const a = searchList[i].getElementsByTagName("a")[0];
    const textValue = a.textContent;

    if (textValue.toLowerCase().indexOf(userSearch) !== -1) {
      console.log(textValue);
      searchList[i].style.display = "";
    } else {
      searchList[i].style.display = "none";
    }
  }
});
