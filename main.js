let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;
btn.onclick = function () {
  if (inp.value == "") {
    alert("Please Enter The Text");
  } else {
    boxs[0].innerHTML += `
    <p class="item" draggable="true">${inp.value}</p>
    `;
    inp.value = "";
  }
  dregItem();
};

function dregItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });
  });
  boxs.forEach((box) => {
    box.addEventListener("dragover", function (e) {
      e.preventDefault();
      box.style.background = "#090";
      box.style.color = "#ffffff";
    });
    box.addEventListener("dragleave", function () {
      box.style.background = "#ffffff";
      box.style.color = "#000000";
    });
    box.addEventListener("drop", function () {
      box.appendChild(drag);
      box.style.background = "#ffffff";
      box.style.color = "#000000";
    });
  });
}
