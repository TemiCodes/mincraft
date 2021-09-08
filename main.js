var canvas = new fabric.Canvas("myCanvas");
 playerx = 5;
 playery = 5;
 image_width = 40;
 image_height = 40;
 var player_object = "";
 var block = "";
 function player() {
     fabric.Image.fromURL("player.png",function(Img){
         player_object = Img;
         player_object.scaleToWidth(150);
         player_object.scaleToHeight(150);
         player_object.set({
             top: playery,left: playerx

         });
         canvas.add(player_object);
     });


 }
 function Ablock(getimage) {
    fabric.Image.fromURL(getimage,function(Img){
        block = Img;
        block.scaleToWidth(image_width);
        block.scaleToHeight(image_height);
        block.set({
            top: playery,left: playerx

        });
        canvas.add(block);
        
    });

    

}
window.addEventListener("keydown",keydown);
function keydown(e) {
   keypress = e.keyCode;
   console.log(keypress)
   if (keypress == "80" && e.shiftKey == true) {
       console.log("shift and p are being pressed together");
       image_width = image_width + 10;
       image_height= image_height + 10;
       document.getElementById("current_width").innerHTML = image_width;
       document.getElementById("current_height").innerHTML = image_height;
   }
   if (keypress == "77" && e.shiftKey == true) {
    console.log("shift and m are being pressed together");
    image_width = image_width - 10;
    image_height= image_height - 10;
    document.getElementById("current_width").innerHTML = image_width;
    document.getElementById("current_height").innerHTML = image_height;
}
if (keypress =="67") {
     Ablock("cloud.jpg");
     console.log("c is being pressed");
}
if (keypress =="68") {
    Ablock("dark_green.png");
    console.log("d is being pressed");
}
if (keypress =="71") {
    Ablock("ground.png");
    console.log("g is being pressed");
}
if (keypress =="76") {
    Ablock("light_green.png");
    console.log("l is being pressed");
}
if (keypress =="82") {
    Ablock("roof.jpg");
    console.log("r is being pressed");
}
if (keypress =="84") {
    Ablock("trunk.jpg");
    console.log("t is being pressed");
}
if (keypress =="85") {
    Ablock("unique.png");
    console.log("u is being pressed");
}
if (keypress =="87") {
    Ablock("wall.jpg");
    console.log("w is being pressed");
}
if (keypress =="89") {
    Ablock("yellow_wall.jpg");
    console.log("y is being pressed");
}
if (keypress =="38") {
    up();
    console.log("up is being pressed");
}
if (keypress =="40") {
    down();
    console.log("down is being pressed");
}
if (keypress =="37") {
    left();
    console.log("left is being pressed");
}
if (keypress =="39") {
    right();
    console.log("right is being pressed");
}



   



}
function up() {
    if (playery >= 0) {
        playery = playery - image_height;
        console.log("image height = " + image_height);
        console.log(" up arrow is being pressed x = " + playerx + " y = " + playery) 
        canvas.remove(player_object)
        player()
    }
    
}
function down() {
    if (playery <= 450) {
        playery = playery + image_height;
        console.log("image height = " + image_height);
        console.log("down arrow is being pressed x = " + playerx + " y = " + playery ) 
        
        canvas.remove(player_object)
        player()
    }
    
}
function left() {
    if (playery >= 0) {
        playerx = playerx - image_width;
        console.log("image width = " + image_width);
        console.log("left arrow is being pressed x = " + playerx + " y = " + playery ) 
        
        canvas.remove(player_object)
        player()
    }
    
}
function right() {
    if (playerx <= 850) {
        playerx = playerx + image_height;
        console.log("image width = " + image_width);
        console.log("right arrow is being pressed x = " + playerx + " y = " + playery ) 
        
        canvas.remove(player_object)
        player()
    }
    
}
