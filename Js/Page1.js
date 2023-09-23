"use strict";
const form = document.getElementById("userName-container");

function UserInformation(name,productionValues,productionDates) {
  //add conditionals for populating two arrays
  this.name = name;
  this.productionValueArray = [];
  this.productionDatesArray = [];
}


//function event designed to locally store userName, production and date when submit is clicked
function  infoLog(event){
  event.preventDefault();
  



  let userInput = document.getElementById("name");
  let userName = userInput.value;
  localStorage.setItem("user", userName);

  let productionInput = document.getElementById("productionValue");
  let productionValue = productionInput.value;
  localStorage.setItem("production-value", productionValue);

  let dateInput = document.getElementById("dateValue");
  let dateValue = dateInput.value;
  localStorage.setItem("Date:", dateValue);

  


  event.target.reset();  
  
}

UserInformation.prototype.render = function(){
  const displayedName = document.createElement("p");
  displayedName.textContent = this.name;
  form.appendChild(displayedName);
  

  
};

let retrievedName = localStorage.getItem("user");
console.log(retrievedName);
const user1 = new UserInformation(retrievedName);
user1.render();




form.addEventListener("submit",infoLog);

