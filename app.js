var cpnBtn = document.getElementById("cnpBtn");
var cpnCode = document.getElementById("cnpCode");

cpnBtn.onclick = function(){
 navigator.clipboard.writeText(cpnCode.innerHTML);
 cpnBtn.innerHTML = "COPIED !";
 setTimeout(function(){
  cpnBtn.innerHTML = "COPIER";
 }, 3000);
}






