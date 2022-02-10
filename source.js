// ------ forms----
var formOne = document.querySelector("#form-one");
var formTwo = document.querySelector("#form-two");
var formTree = document.querySelector("#form-tree");
// ----buttons----
var next01 = document.querySelector("#next01");
var next02 = document.querySelector("#next02");
var back01 = document.querySelector("#back01");
var back02 = document.querySelector("#back02");
// -----bar-----
var progress = document.querySelector(".progress");

next01.addEventListener("click", function () {
  formOne.style.left = "-450px";
  formTwo.style.left = "35px";
  progress.style.width = "240px";
});

back01.addEventListener("click", function () {
  formOne.style.left = "35px";
  formTwo.style.left = "450px";
  progress.style.width = "100px";
});
back02.addEventListener("click", function () {
  formTwo.style.left = "35px";
  formTree.style.left = "450px";
  progress.style.width = "240px";
});

next02.addEventListener("click", function () {
  formTwo.style.left = "-450px";
  formTree.style.left = "35px";
  progress.style.width = "360px";
});
