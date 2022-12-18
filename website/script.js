var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// const lastSection = document.querySelector("section:last-of-type");

// const bgSwitchFunc = () => {
//   window.innerWidth < 481
//     ? lastSection.classList.add("change-bg-image")
//     : lastSection.classList.remove("change-bg-image");
// };

// window.onresize = bgSwitchFunc;
// window.onload = bgSwitchFunc;
