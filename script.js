let keypress= document.getElementById("k1");
let keyCodeofPress = document.getElementById("keyCodeofPress");
let main = document.getElementById("main");
let main2 = document.getElementsByClassName("main2");
let k1 = document.getElementById("k1");

//click event
// main.addEventListener('click',()=>{
   
// });

let beat = new Audio('6-september-2022-128k-60971.mp3');

//keypress event
document.addEventListener("keypress",(e)=>{
    main2[0].style.display = "block";
    main.style.display = "none";
    k1.innerText = e.key;
    keyCodeofPress.innerText = e.keyCode;
    beat.play();
});





