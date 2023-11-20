for(var i=0; i<document.querySelectorAll(".drum").length ;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var alphabet = this.innerHTML;
clickSound(alphabet);
addAnimation(alphabet);
})

document.addEventListener("keypress", function(event){
clickSound(event.key);
addAnimation(event.key);
})

function clickSound(alphabet){
    switch(alphabet){
        case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        
        case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        
        
        case "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
        
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        
        
        case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
        
        
        default:
        }
}
function addAnimation(pressedKey){
    document.querySelector("."+pressedKey).classList.add("pressed");// this will creare the shadow effect
    // now we need to wait for .1 sec so we will add a timeout function


    setTimeout(function(){
        document.querySelector("."+pressedKey).classList.remove("pressed");},100);
    }
}



