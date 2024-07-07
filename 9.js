const myBtn = document.getElementById("btn");
const myPopover = document.getElementById("popover")
const closeBtn = document.getElementById("close")


myBtn.addEventListener("click", function() {

    myPopover.classList.add("active");


});
closeBtn.addEventListener("click", function() {

    myPopover.classList.remove("active");


});