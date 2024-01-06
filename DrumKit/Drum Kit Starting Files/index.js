var noButton = document.querySelectorAll(".drum").length;
for(var i=0; i<noButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
        audio.play();
    });

}

var audio = new Audio ("sounds/tom-1.mp3");


