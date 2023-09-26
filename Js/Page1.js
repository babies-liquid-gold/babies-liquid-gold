"use strict";

const globalVariables = {
  form: document.getElementById("userName-container"),
};


//function event designed to locally store userName, production and date when submit is clicked
function infoLog(event) {
  event.preventDefault();
  localStorage.clear();
  
  let userInput = document.getElementById("name");
  let userName = `Username:${userInput.value}`;
  localStorage.setItem("user", userName);
  
  let productionInput = document.getElementById("productionValue");
  let productionValue = `Today's Production Value: ${productionInput.value}`;
  localStorage.setItem("production-value", productionValue);
  
  let dateInput = document.getElementById("dateValue");
  let dateValue = `Today's Date: ${dateInput.value}`;
  localStorage.setItem("Date", dateValue);
  
  const inputName = document.createElement("p");
  const inputMilkValue = document.createElement("p");
  const inputDate = document.createElement("p");
  inputName.textContent = `${userName}`;
  inputMilkValue.textContent = `${productionValue}`;
  inputDate.textContent = `${dateValue}`;
  globalVariables.form.appendChild(inputName);
  inputName.appendChild(inputMilkValue);
  inputMilkValue.appendChild(inputDate);
  
  globalVariables.form.removeChild(globalVariables.form.children[1]);
  event.target.reset();
  
}

function UserInformation(name, productionValue, productionDate) {
  //add conditionals for populating two arrays
  this.name = name;
  this.productionValue = productionValue;
  this.productionDate = productionDate;
}
UserInformation.prototype.render = function () {
  const displayedName = document.createElement("p");
  const displayedValue = document.createElement("p");
  const displayedDated = document.createElement("p");
  
  
  displayedName.textContent = `${this.name}`;
  displayedValue.textContent = `${this.productionValue}`;
  displayedDated.textContent = `${this.productionDate}`;
  globalVariables.form.appendChild(displayedName);
  displayedName.appendChild(displayedValue);
  displayedValue.appendChild(displayedDated);
};
globalVariables.form.addEventListener("submit", infoLog);
//function to render specific information from userInformation

function persistData() {
  let retrievedName = localStorage.getItem("user");
  let retrievedMilkValue = localStorage.getItem("production-value");
  let retrievedDate = localStorage.getItem("Date");
  const user1 = new UserInformation(
    retrievedName,
    retrievedMilkValue,
    retrievedDate
  );
  user1.render();
}

//retrieves and stores information from local storage and places it in instance of
//userInformation constructor that's been named user1

persistData();
