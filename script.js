const message = document.getElementById("message");
const submitButton = document.getElementById("submit__message");
const contains = document.querySelector("#contains");
const containsMessage = document.querySelector(".contains__message");

const badWords = ["connard", "connards", "salope"];

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const messageValue = message.value;
  containsMessage.textContent = messageValue;
  const messageTest = containsMessage.textContent;
  const newMessage = replace(messageTest, badWords);
  containsMessage.textContent = "";
  containsMessage.textContent = newMessage;
});

function replace(message, arr) {
  arr.forEach((elem) => {
    if (message.includes(elem)) {
      message = message.replace(elem, "***");
    }
  });
  return message;
}
