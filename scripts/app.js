// alert()


let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2");
let btnChange3 = document.getElementById("btnChange3"); 
let btnChange4 = document.getElementById("btnChange4");
let btnChange5 = document.getElementById("btnChange5");
let btnChange6 = document.getElementById("btnChange6");
let btnChange7 = document.getElementById("btnChange7");
let btnChange8 = document.getElementById("btnChange8");
let btnChange9 = document.getElementById("btnChange9");
let btnChange10 = document.getElementById("btnChange10");


// console.log(btnChange1);

let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2");
let affectMe3 = document.getElementById("affectMe3")
let affectMe4 = document.getElementById("affectMe4")
let affectMe5 = document.getElementById("affectMe5")
let affectMe6 = document.getElementById("affectMe6")
let affectMe7 = document.getElementById("affectMe7")
let affectMe8 = document.getElementById("affectMe8")
let affectMe9 = document.getElementById("affectMe9")
let affectMe10 = document.getElementById("affectMe10")


// console.log(affectMe1);

btnChange1.addEventListener("click", function(event){
    // alert("Btn Clicked")
    affectMe1.innerText = "You just changed this text";
});
 

btnChange2.addEventListener("click", function(event){
    affectMe2.innerText = "You Just enlarged this text";
    affectMe2.className = "news-Style";
});

btnChange3.addEventListener("click", function(event){
    affectMe3.innerText = "You just did a barrelRoll on this text";
    affectMe3.className = "news-Style " + "barrelRoll";
});

btnChange4.addEventListener("click", function(event){
    affectMe4.innerText = "You just wiggled this text";
    affectMe4.className = "wiggle-style " + "wiggle";
});

btnChange5.addEventListener("click", function(event){
    affectMe5.innerText = "You just pullsed this text";
    affectMe5.className = "pulse-style " + "pulse";
});

btnChange6.addEventListener("click", function(event){
    affectMe6.innerText = "You just zoomed out this text";
    affectMe6.className = "zoom " + "zoomerOut";
});

btnChange7.addEventListener("click", function(event){
    affectMe7.innerText = "You just slide this text up";
    affectMe7.className = "slideUp " + "slideUp";
});

btnChange8.addEventListener("click", function(event){
    affectMe8.innerText = "You just gave a heartbeat on this text";
    affectMe8.className = "heartbeat " + "heartbeat";
});

btnChange9.addEventListener("click", function(event){
    var img = document.createElement("img");
    img.src = "/assets/Haliey-Welch.jpg.webp";
    affectMe6.innerText = "";
    img.height = 150;
    img.width = 150;
    affectMe6.appendChild(img);
    affectMe6.className ="rotation";
});

btnChange10.addEventListener("click", function(event){
    affectMe10.innerText = "You just rotated this text in";
    affectMe10.className = "rotateIn";
});

