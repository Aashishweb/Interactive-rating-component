


const submitBtn = document.getElementById("submit");
let selectedRating = document.getElementById("selected-num")
console.log(selectedRating)

const liItems = document.querySelectorAll("li");
function func(li){
  console.log("click")
}


function func(li){
  
  for (let i = 0; i < liItems.length; i++) {
      liItems[i].style.backgroundColor = "#303c47";     
  }
  li.style.backgroundColor = "var(--Orange)";
  let valueli = li.innerHTML;
  selectedRating.textContent = `You  selected ${valueli} out of 5 `
  
}




submitBtn.addEventListener("click", function(){
  var activeRating = document.getElementById("active-rating")
  var activeThankRemove = document.getElementById("thankYou")
  activeThankRemove.classList.remove("active-thankyou-remove");
  activeRating.style.display = "none";
  

} )