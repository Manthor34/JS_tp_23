
// let buttonSelector = document.querySelector("button");
// var secondes = 11;
// var timer;

// function decompte(){
//     if (secondes > 0){
//     secondes --;
//     console.log(secondes);
//     return secondes
//     } else {
//         clearInterval(timer)
//         secondes = 11
//         document.querySelector("div").innerText = " "
//     }
// }


// buttonSelector.addEventListener("click", function start(){
//     timer = setInterval(function(){
//         decompte()
//         document.getElementById("ecran").textContent = `${secondes}`
//     },200);
// })

// let buttonSelector = document.querySelector("button");
// let pSelector = document.querySelector("p");
// var audio = new Audio("myheart.mp3");
// let cache = true

// pSelector.style.display = "none";


// buttonSelector.addEventListener("click", function(){
//     if (cache == true){
//         pSelector.style.display = "flex";
//         cache = false
//         audio.play();
//     } else if (cache == false) {
//         function randomColor() {
//             return Math.floor(Math.random()*16777215).toString(16);
//         }
        
        
//         var lol = setInterval(() => {
//             buttonSelector.style.background = "#" + randomColor()
            
//         }, 10);
        
//         buttonSelector.addEventListener("click", function(){
//             clearInterval(lol)
//         });
//         pSelector.style.display = "none";
//         cache = true
//     }
// })

// function randomColor() {
//     return Math.floor(Math.random()*16777215).toString(16);
// }


// var lol = setInterval(() => {
//     buttonSelector.style.background = "#" + randomColor()
    
// }, 10);

// buttonSelector.addEventListener("click", function(){
//     clearInterval(lol)
// });

// function initializeVideo() {
//     let videoSelector = document.querySelector("#troll");
//     if (videoSelector) return; // Cancel if video alredy exist
//     let newVideo = document.createElement("audio");
//     newVideo.src = "rickRoll.mp3";
//     newVideo.setAttribute("muted", true);
//     newVideo.id = "troll";
//     document.body.prepend(newVideo);
//   }