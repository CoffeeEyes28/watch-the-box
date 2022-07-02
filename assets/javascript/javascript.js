document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "Blue";
});
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.2"
});
document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.border = "10px solid black";
});
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "Orange";
    document.getElementById("box").style.opacity = null;
    document.getElementById("box").style.border = null;
});
