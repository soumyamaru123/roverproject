canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array=["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg"];

random_number = math.floor(math.random()*4);

roverwidth=100;
roverheight=90;


rover_x=10;
rover_y=10;

background_image=nasa_mars_images_array[random_number];
console.log("background_image = "+background_image);
rover_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,roverwidth,roverheight);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keycode;
    console.log(keypressed);

    if(keypressed=='37'){
        left();
        console.log("left");
    }

    if(keypressed=='38'){
        up();
        console.log("up");
    }

    if(keypressed=='39'){
        right();
        console.log("right");
    }

    if(keypressed=='40'){
        down();
        console.log("down");
    }

}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y <= 550){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x <= 550){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}