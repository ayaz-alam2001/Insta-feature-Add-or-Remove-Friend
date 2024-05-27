var addFriend = document.querySelector("#add");
var istatus = document.querySelector("h4");

var count = 0;

addFriend.addEventListener("click", function () {
  if (count == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    addFriend.innerHTML = "Remove";
    count = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    count = 0;
  }
});
