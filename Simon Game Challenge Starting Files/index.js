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

$(document).on("keydown", function(){
    alert("keypressed");
    $("h1").text("Level "+level);
    
});



$("#green").on("click", function(){
    $("#green").addClass("pressed");
    setTimeout(
        function(){
            $("#green").removeClass("pressed");
        }, 200
    );
    var audio =new Audio("sounds/green.mp3");
    audio.play();
    userOrder.push(0);
    console.log(" in f userOrder: "+userOrder);

});

$("#blue").on("click", function(){
    $("#blue").addClass("pressed");
    setTimeout(
        function(){
            $("#blue").removeClass("pressed");
        }, 200
    );
    var audio =new Audio("sounds/blue.mp3");
    audio.play();
    userOrder.push(1);
    console.log(" in f userOrder: "+userOrder);

});

$("#red").on("click", function(){
    $("#red").addClass("pressed");
    setTimeout(
        function(){
            $("#red").removeClass("pressed");
        }, 200
    );
    var audio =new Audio("sounds/red.mp3");
    audio.play();
    userOrder.push(2);
    console.log(" in f userOrder: "+userOrder);

});
$("#yellow").on("click", function(){
    $("#yellow").addClass("pressed");
    setTimeout(
        function(){
            $("#yellow").removeClass("pressed");
        }, 200
    );
    var audio =new Audio("sounds/yellow.mp3");
    audio.play();
    userOrder.push(3);
    console.log(" in f userOrder: "+userOrder);

});




function check(correctOrder, userOrder){
    if(correctOrder.length!=userOrder.length){return false;}
    var n= correctOrder.length;
    for(var i=0;i<n;i++){
        if(correctOrder[i]!=userOrder[i]){
            return false;
        }
    }
    return true;

}


function flashRandomButton( index){
    alert("new flash");
    var id=button[index];
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

    $(id).addClass("pressed");
    console.log("")
    setTimeout(
        function(){
            $(id).removeClass("pressed");
            }, 600
        );
    console.log("Function: flashed new button");  
}


var continuegames=true;
console.log("correct order: "+correctOrder);
console.log("userOrder: "+userOrder);
var flash=true;



while(level<5 && flash==true){
    
    var index= Math.floor(Math.random()*3);
    console.log("flashing new button ");
    correctOrder.push(index);
    console.log("correctorder: "+correctOrder);
    flashRandomButton(index);
    // complete code: wait for user to click buttons equal to correctorder length times
        
    
    
}









