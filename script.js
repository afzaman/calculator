function operate(){
    var equationCompleted = document.getElementById("display").textContent;
    document.getElementById("display").textContent = eval(equationCompleted);
    document.getElementById("memory").textContent += `${equationCompleted} = ${eval(equationCompleted)} \r\n`;
}
function buttonPress(displayText){
    document.getElementById("display").textContent += displayText;
}
function clearButton(){
    document.getElementById("display").textContent = "";
}
function deleteButton(){
    var str = document.getElementById("display").textContent;
    var newStr = str.slice(0,-1);
    document.getElementById("display").textContent = newStr;
}
document.addEventListener("keydown", function(event) {
    if (event.key )
    document.getElementById("display").textContent += event.key;
  })