var button =[
    "#green",
    "#blue",
    "#red",
    "#yellow"
];

var audios=[
    "sounds/green.mp3",
    "sounds/blue.mp3",
    "sounds/red.mp3",
    "sounds/yellow.mp3"

]

var level=1;
var correctOrder=[];
var userOrder=[];


function flashRandomButton(){
    var newUserOrder=[];
    userOrder=newUserOrder;
    var index=Math.floor(Math.random()*4);
    var id=button[index];
    correctOrder.push(index);
    console.log("Function: flashed new button");  
    console.log("correctOrder: "+correctOrder);
    switch(index){
        case 0:
            var audio= new Audio("sounds/green.mp3");
            audio.play();
            console.log("play");
            setTimeout(function(){}, correctOrder.length*2000);
            break;

        case 1:
            var audio= new Audio("sounds/blue.mp3");
            audio.play();
            console.log("play");
            setTimeout(function(){}, correctOrder.length*2000);
            break;    

        case 2:
            var audio= new Audio("sounds/red.mp3");
            audio.play();
            console.log("play");
            setTimeout(function(){}, correctOrder.length*2000);
            break;
        case 3:
            var audio= new Audio("sounds/yellow.mp3");
            audio.play();
            console.log("play");
            setTimeout(function(){}, correctOrder.length*2000);
            break;
        default: 
            setTimeout(function(){}, correctOrder.length*2000);
            break;    


    }

    $(id).addClass("pressedGame");
    console.log("")
    setTimeout(
        function(){
            $(id).removeClass("pressedGame");
            }, 600
        );
    
    
}

function validate(userOrder){
    if(userOrder.length==correctOrder.length){
        var n=correctOrder.length;
        var flash=true
        for(var i=0; i<n; i++){
            if(userOrder[i]!=correctOrder[i]){
                flash=false;
            }

        }
        if(flash==true){
            changeheading();
            flashRandomButton();
        }
        else{
            gameOver();
            return false;
        }
    }
    else{
        for(var i=0; i< userOrder.length; i++){
            if(userOrder[i]!=correctOrder[i]){
                flash=false;
                gameOver();
                return false;
            }

        }
    }
    return true;

}



function start(){
    flashRandomButton();
}

function gameOver(){
    var audio =new Audio("sounds/wrong.mp3");
    audio.play();

    console.log("after wrong audio");
    $("h1").text("Game Over, Press any Key to play again! ");
    level=1;
    var newgame=[]
    correctOrder=newgame;
    
}

function changeheading(){
    level=level+1;
    $("h1").text("Level "+level);
}



$("#green").on("click", function(){
    $("#green").addClass("pressed");
    setTimeout(
        function(){
            $("#green").removeClass("pressed");
        }, 200
    );
    userOrder.push(0);
    console.log(" in f userOrder: "+userOrder);
    if(validate(userOrder)==true){
        var audio =new Audio("sounds/green.mp3");
        audio.play();

    }
    
    

});

$("#blue").on("click", function(){
    $("#blue").addClass("pressed");
    setTimeout(
        function(){
            $("#blue").removeClass("pressed");
        }, 200
    );
    userOrder.push(1);
    console.log(" in f userOrder: "+userOrder);
    if(validate(userOrder)==true){
        wrongAudio.play();
        var audio =new Audio("sounds/blue.mp3");
        audio.play();
    }
   
    
    

});

$("#red").on("click", function(){
    $("#red").addClass("pressed");
    setTimeout(
        function(){
            $("#red").removeClass("pressed");
        }, 200
    );
    userOrder.push(2);
    console.log(" in f userOrder: "+userOrder);
    if(validate(userOrder)==true){
        var audio =new Audio("sounds/red.mp3");
        audio.play();
    }

    
   
    

});
$("#yellow").on("click", function(){
    $("#yellow").addClass("pressed");
    setTimeout(
        function(){
            $("#yellow").removeClass("pressed");
        }, 200
    );
    userOrder.push(3);
    console.log(" in f userOrder: "+userOrder);
    if(validate(userOrder)==true){
        var audio =new Audio("sounds/yellow.mp3");
        audio.play();
    }
    
   
    

});

$(document).on("keydown", function(){
    //alert("keypressed");
    $("h1").text("Level "+level);
    start();
    
});











