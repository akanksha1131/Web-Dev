
var images=[
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];


   
    var index1=Math.floor(Math.random()*6);
    var index2=Math.floor(Math.random()*6);
    var img1src=images[index1];
    var img2src=images[index2];
     document.querySelector(".img1").setAttribute("src",img1src);
     document.querySelector(".img2").setAttribute("src",img2src);

     if(index1>index2){
        document.querySelector("h1").innerHTML="Player 1 wins!";
     }
     else{
        document.querySelector("h1").innerHTML="Player 2 wins!";
     }



