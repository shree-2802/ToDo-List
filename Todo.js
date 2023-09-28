let todoArray = []; //localStorage.getItem('todoArray') | [];
document.querySelector(".js-inputBox").addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    document.querySelector(".js-dateInput").focus();
  }
});
document.querySelector(".js-dateInput").addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    document.querySelector(".js-addButton").focus();
  }
});
document.querySelector(".js-addButton").addEventListener("click", () => {
  listDisplay();
});
function listDisplay() {
  let input = document.querySelector(".js-inputBox");
  let dateInput = document.querySelector(".js-dateInput");
  if (input.value === "" || dateInput.value === "") {
    alert("Please do fill all boxes");
  } else {
    todoArray.push({ name: input.value, date: dateInput.value });
    //localStorage.setItem('todoArray',todoArray);
    listDisp();
  }
  input.value = "";
  dateInput.value = "";
}
function listDisp() {
  let todoHtml = "";
  todoArray.forEach((val, i) => {
    todoHtml += `
          <div>
            <p class="css-todo">${val.name}</p>
          </div>
            <p>${val.date}</p>
          <div>
              <button class="css-deleteButton" onclick='todoArray.splice(${i},1);listDisp();'>Delete</button>
          </div>
          `;
  });
  console.log(todoHtml);
  document.querySelector(".js-content").innerHTML = todoHtml;
}
