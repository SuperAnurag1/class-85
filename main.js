canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_height=90;
rover_width=100;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";

function add()
{
 bg=new Image();
 bg.onload=uploadbackground;
 bg.src=background_image;

 r=new Image();
 r.onload=uploadrover;
 r.src=rover_image;
}


function uploadrover()
{
    ctx.drawImage(r,rover_x,rover_y,rover_width,rover_height);
    
}



function uploadbackground()
{
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
    
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)

{
    keyPressed=e.KeyCode;
    console.log(keyPressed);

    if (keyPressed=='37')
    {
        Left();
        console.log("Left");
    }

    if (keyPressed=='38')
    {
        Up();
        console.log("Up");
    }

    if (keyPressed=='39')
    {
        Right();
        console.log("Right");
    }

    if (keyPressed=='40')
    {
        Down();
        console.log("Down");
    }
}

function Up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,y="+rover_y+",x="+rover_x);
        uploadbackground();
        uploadrover();
    
    }
    
}


function Down()
{
if(rover_y<=500)
{
    rover_y=rover_y+10;
    console.log("when down arrow is pressed,y="+rover_y+",x="+rover_x);
    uploadbackground();
    uploadrover();
}
}

function Left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed,x="+rover_y+",x="+rover_y);
        uploadbackground();
        uploadrover();

    }
}



function Right()
{
    if(rover_x<700)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed,x="+rover_x+",y="+rover_y);
        uploadbackground();
uploadrover();
    }
}