
console.log("co sie tu patrzysz ?")


const btn = document.querySelector("button"); 
if (btn) {
  btn.onclick = function() {
    
    btn.classList.toggle("dipped");
  };
}
