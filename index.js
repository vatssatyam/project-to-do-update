// global scope
let addTaskPopUp = document.querySelector(".addTaskPopUp");
let addTaskPopUp2 = document.querySelector(".addTaskPopUp2");
let backButton = document.querySelector(".backBtn");
let backButton2 = document.querySelector(".backBtn2");
let addTaskPopUpSecondPage = document.querySelector(".addTaskPopUpSecondPage");
let addTaskButton = document.querySelector(".addTaskButton");
let closeTaskButton = document.querySelector(".closeTaskButton");
let headingFirstPage = document.getElementsByClassName("headingFirstPage");
let popup = document.getElementsByClassName("addTask");
let popup2 = document.getElementsByClassName("addItem");
let checkItems = document.querySelector(".checkItem");
let addSubtaskConButton = document.querySelector(".addSubtaskConButton");
let headingSecondPage = document.getElementsByClassName("headingSecondPage");
let headingSecondPageText = document.getElementsByClassName(
  "headingSecondPageText"
);
let toDoCardContainer = document.getElementsByClassName("toDoCardContainers");
let toDoCardContainer2 = document.getElementsByClassName("toDoCardContainer2");
let closeSubtaskConButton = document.querySelector(".closeSubtaskConButton");

// codeing start with addEventListener
addTaskPopUp.addEventListener("click", () => {
  addNewPopUp();
});
addTaskPopUp2.addEventListener("click", () => {
  addNewPopUp();
});
backButton.addEventListener("click", () => {
  back();
});
backButton2.addEventListener("click", () => {
  back();
});
addTaskPopUpSecondPage.addEventListener("click", () => {
  addNewPopUp();
});
addTaskButton.addEventListener("click", () => {
  addTask();
});
closeTaskButton.addEventListener("click", () => {
  closeTask();
});
addSubtaskConButton.addEventListener("click", () => {
  addItem();
});
closeSubtaskConButton.addEventListener("click", () => {
  closeItem();
});

// function start
function addNewPopUp() {
  headingFirstPage[0].classList.add("blur1");
  headingSecondPage[0].classList.add("blur1");

  popup[0].style.display = "block";
}

function closeTask() {
  popup[0].style.display = "none";
  headingFirstPage[0].classList.remove("blur1");
  headingSecondPage[0].classList.remove("blur1");
}
var idCount = 0;
var count = 0;
let toDoCardContainerCardId = 0;
let child;
let headChild;
let childMainDiv;

// adding a new task
function addTask() {
  idCount++;
  count++;

  let cardTittle = document.querySelector(".cardText").value;

  if (cardTittle) {
    createCard(idCount, cardTittle);
  } else {
    cardTittle = "No Name";
    createCard(idCount, cardTittle);
  }
  closeTask();
  // back();
  if (count > 0) {
    checkItems.style.display = "none";
  }
}

function createCard(id, cardTittle) {
  let toDoCardContainerDiv = document.createElement("div");
  toDoCardContainerDiv.setAttribute("id", `${id}`);
  let heading = document.createElement("p");
  let button1 = document.createElement("img");
  let button2 = document.createElement("img");

  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", `mainDiv${id}`);
  toDoCardContainer[0].appendChild(toDoCardContainerDiv);
  toDoCardContainerDiv.appendChild(heading);
  toDoCardContainerDiv.appendChild(mainDiv);
  toDoCardContainerDiv.append(button1);
  toDoCardContainerDiv.append(button2);

  // toDoCardContainerDiv.appendChild(mainDiv);

  heading.innerHTML = `${cardTittle}`;

  button2.src = "./edit.png";
  button1.src = "./trash.png";
  mainDiv.classList.add("mainDiv");
  toDoCardContainerDiv.classList.add("toDoCardContainerscard");
  button1.classList.add("addCardBtn1");
  button2.classList.add("addCardBtn2");
  heading.classList.add("line");

  heading.addEventListener("click", () => {
    headingFirstPage[0].style.display = "none";
    headingSecondPage[0].style.display = "block";
    mainDiv.classList.add("mainDivBack");
    headingSecondPageText[0].innerHTML = `${cardTittle}`;
    toDoCardContainerCardId = toDoCardContainerDiv.getAttribute("id");
    headChild = document.getElementById(`${toDoCardContainerCardId}`);
    console.log(headChild);
    toDoCardContainer2[0].appendChild(headChild);
    // here headChaild is a taskParentDiv
    button1.addEventListener("click", () => {
      mainDiv.classList.remove("mainDivBack");
      headingFirstPage[0].style.display = "block";
      headingSecondPage[0].style.display = "none";
      headChild.remove();
      RemoveNoItem();
    });
  });

  button1.addEventListener("click", () => {
    toDoCardContainerDiv.remove();
    count--;
    RemoveNoItem();
  });

  button2.addEventListener("click", () => {
    headingFirstPage[0].classList.add("blur1");
    headingSecondPage[0].classList.add("blur1");
    popup2[0].style.display = "block";

    // this line is use to finding the main parent of the box
    // jisme sub kuch rakha hai
    toDoCardContainerCardId = toDoCardContainerDiv.getAttribute("id");
    // this line is use to targeting the subtaskContainner
    child = document.getElementById(`${toDoCardContainerCardId}`).children;
    childMainDiv = child[1];
    // here childMainDiv is subtaskContainner
  });
}

function closeItem() {
  headingFirstPage[0].classList.remove("blur1");
  headingSecondPage[0].classList.remove("blur1");
  popup2[0].style.display = "none";
}

function addItem() {
  popup2[0].style.display = "none";
  headingFirstPage[0].classList.remove("blur1");
  headingSecondPage[0].classList.remove("blur1");

  let itemDiv = document.createElement("div");
  let itemText = document.createElement("div");
  let SubtaskConButton = document.createElement("button");

  console.log(childMainDiv);
  childMainDiv.appendChild(itemDiv);
  itemDiv.appendChild(itemText);
  itemDiv.appendChild(SubtaskConButton);

  itemDiv.classList.add("itemDiv");
  itemText.classList.add("itemText");
  SubtaskConButton.classList.add("SubtaskConButton");

  let itemInput = document.querySelector(".cardItem").value;
  // subtask Heading
  if (itemInput) {
    itemText.innerHTML = `${itemInput}`;
    SubtaskConButton.innerHTML = " Done";
  } else {
    itemText.innerHTML = `unKnow`;
    SubtaskConButton.innerHTML = " Done";
  }

  itemText.innerHTML = `${itemInput}`;
  SubtaskConButton.innerHTML = " Done";

  SubtaskConButton.addEventListener("click", () => {
    itemText.style.textDecoration = "line-through";
    itemText.style.color = "red";
    SubtaskConButton.style.display = "none";
    itemText.style.marginLeft = "55px";

    itemText.addEventListener("click", () => {
      itemText.style.textDecoration = "none";
      itemText.style.color = "black";
      SubtaskConButton.style.display = "block";
      itemText.style.marginLeft = "0px";
    });
  });
}

function back() {
  headingFirstPage[0].style.display = "block";
  headingSecondPage[0].style.display = "none";
  // here headChaild is a taskParentDiv
  toDoCardContainer[0].appendChild(headChild);
  mainDiv.classList.remove("mainDivBack");
}

function RemoveNoItem() {
  if (count === 0) {
    checkItems.style.display = "block";
  }
}
