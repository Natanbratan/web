const backgroundColor = "green";
let textColor = "white";
const backgroundColor2 = "grey";
let textColor2 = "white";

function changeColor() {
  const li = document.getElementById("elem");

  if (li.style.color === textColor) {
    textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    return (li.style.color = textColor);
  }
  li.style.backgroundColor = backgroundColor;
  li.style.color = textColor;
}

function changeSecColor() {
  const li = document.querySelector("#elem2");

  if (li.style.color === textColor2) {
    textColor2 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    return (li.style.color = textColor2);
  }
  li.style.backgroundColor = backgroundColor2;
  li.style.color = textColor2;
}

function zoomIncrease() {
  const img = document.querySelector("#image");
  img.style.width = "70%";
}

function zoomDecrease() {
  const img = document.querySelector("#image");
  img.style.width = "50%";
}

function deleteImg() {
  const block = document.querySelector(".img");
  block.innerHTML = "";
}

function addImg() {
  const block = document.querySelector(".img");
  block.innerHTML =
    '<a href="https://kr-rada.gov.ua"><img src="./khmelnytskyi-1.jpg" id="image"></a>';
}
