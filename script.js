document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        operate();
    } if (event.keyCode >= 96 && event.keyCode <= 109 
        || event.keyCode >= 48 && event.keyCode <= 57 
        || event.keyCode === 189
        || event.keyCode === 187
        || event.keyCode === 111
        || event.keyCode === 57){
            document.getElementById("display").textContent += event.key;
    } if (event.keyCode === 8 || event.keyCode === 46){
        deleteButton();
    } if (event.keyCode === 110 || event.keyCode === 190){
        decimalButton(".");
    };
    ;
});
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
function decimalButton(displayText) {
    var equationInProgress = document.getElementById("display").textContent;
    if (equationInProgress.includes(".")){
    } else {
        document.getElementById("display").textContent += displayText;
    }
}
function deleteButton(){
    var str = document.getElementById("display").textContent;
    var newStr = str.slice(0,-1);
    document.getElementById("display").textContent = newStr;
}