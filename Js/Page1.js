"use strict";

const globalVariables = {
  form: document.getElementById("userName-container"),
  lowMilkContainer: document.getElementById("low-div"),
  mediumMilkContainer: document.getElementById("medium-div"),
  highMilkContainer: document.getElementById("high-div"),
};

const lowImage = document.createElement("img");
const mediumImage = document.createElement("img");
const highImage = document.createElement("img");
function displayImages() {
  lowImage.src = "img/taksh-Ss3bXajj-po-unsplash (1).jpg";
  lowImage.alt = "low-milk";
  lowImage.width = 300;
  lowImage.height = 300;
  lowImage.padding= 3;
  globalVariables.lowMilkContainer.appendChild(lowImage);

  mediumImage.src = "img/brytny-com-8ggcekgy358-unsplash.jpg";
  mediumImage.alt = "medium-milk";
  mediumImage.width = 300;
  mediumImage.height = 300;
  globalVariables.lowMilkContainer.appendChild(mediumImage);

  highImage.src = "img/minnie-zhou-CO7Ncwg8IxI-unsplash.jpg";
  highImage.alt = "high-milk";
  highImage.width = 300;
  highImage.height = 300;
  globalVariables.lowMilkContainer.appendChild(highImage);
}
displayImages();

function lowImageInfo() {
  const lowInfo = document.createElement("p");
  lowInfo.textContent = ` Your milk supply is considered low when you aren't producing enough milk to meet your baby's needs. A good milk output is 25-35 ounces daily.
       
  Ways to Increase Milk Production:
  *Make sure that your baby is latching properly to your breast.
  *Feed your baby often, at least 8-12 times a day
  *Stop smoking/ drinking alcohol
  *Choose birth control that does not contain estrogen
  *Breastfeed skin to skin, it releases hormones that aid in milk production
  *Eat a healthy, well balanced diet that is rich in protein, whole grains, leafy green vegetables and legumes/beans. Some herbs such as fennel and fenugreek may increase milk production.
  
  Click the link to this recipe that may aid in consistent milk production: 
  https://detoxinista.com/green-lactation-smoothie/`;
  globalVariables.lowMilkContainer.appendChild(lowInfo);
  localStorage.setItem("lowInfo", lowInfo);
}

function mediumImageInfo() {
  const mediumInfo = document.createElement("p");
  mediumInfo.textContent = ` Your milk supply is considered average when you are producing enough milk to meet your baby’s needs. A good output is 25-35 ounces per day.
      
  Ways to Maintain a Good Milk Production:
  *Make sure that your baby is latching properly to your breast.
  *Feed your baby often, at least 8-12 times a day
  *Stop smoking/ drinking alcohol
  *Choose birth control that does not contain estrogen
  *Breastfeed skin to skin, it releases hormones that aid in milk production
  *Eat a healthy, well balanced diet that is rich in protein, whole grains, leafy green vegetables and legumes/beans. Some herbs such as fennel and fenugreek have been said to increase milk production.
  
  Click the link to this recipe that may aid in consistent milk production: https://whatmollymade.com/blueberry-lactation-muffins/
  `;
  globalVariables.lowMilkContainer.appendChild(mediumInfo);
  localStorage.setItem("mediumInfo", mediumInfo);
}

function highImageInfo() {
  const highInfo = document.createElement("p");
  highInfo.textContent = `Your milk supply is considered high when you continue to make more milk than their baby needs. Oversupply can make breastfeeding difficult for both you and your baby. A good output is 25-35 ounces per day. If you believe that you have an oversupply of milk, you should speak with your doctor. They will be able to assist you with methods and ways to decrease milk production.
  Ways to Decrease Milk Production:
  *Feed your baby from only one breast at each feed.
  *Space feeds out — at least 2 ½ hours apart.
  *At your next feed, change to your other breast.Continue this pattern for a few days.
  *You might need to hand express a small amount from the unused breast to relieve pressure or discomfort. Don’t empty that breast — the leftover milk in the unused breast triggers the reduction in your milk production.`;
  globalVariables.lowMilkContainer.appendChild(highInfo);
  localStorage.setItem("highInfo", highInfo);
}
lowImage.addEventListener("click", lowImageInfo);
mediumImage.addEventListener("click", mediumImageInfo);
highImage.addEventListener("click", highImageInfo);

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

  if (productionInput.value < 18) {
    const lowLevel = document.createElement("p");
    lowLevel.textContent = `Your milk production is ${productionInput.value} and is considered low, please click the low production image below.`;
    inputMilkValue.appendChild(lowLevel);
  } else if (productionInput.value > 19 && productionInput.value < 25) {
    const mediumLevel = document.createElement("p");
    mediumLevel.textContent = `Your milk production is ${productionInput.value} and is considered medium, please click the medium production image below`;
    inputMilkValue.appendChild(mediumLevel);
  } else if (productionInput.value > 25) {
    const highLevel = document.createElement("p");
    highLevel.textContent = `Your milk production is ${productionInput.value} and is considered high, please click the high production image below`;
    inputMilkValue.appendChild(highLevel);
  }

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
//add an event listener function that will display information when user clicks image

//add an event listener call function similar to the one below

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


// To anyone who sees this section of the code. I'd like to say that I'm grateful for all of the knowledge I have received from both Thomas and Dwight. I'm also grateful for the people i've met and learned from. I encourage you all to pursue whatever it is you desire, and do your best going forward.