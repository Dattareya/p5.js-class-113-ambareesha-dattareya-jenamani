function preload()
{

}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    color="";
    video.hide();
}
function draw()
{
    image(video,0,0,600,500);
   
    fill("red");
    circle(50,50,80);
    fill("blue");
    rect(75,40,450,20);

    fill("red");
    circle(550,50,80);
    fill("blue");
    rect(75,435,450,20);
    
    fill("red");
    circle(50,450,80);
    fill("blue");
    rect(550,70,20,380);

    fill("red");
    circle(550,450,80);
    fill("blue");
    rect(50,70,20,380);
}
function filter()
{
color=document.getElementById("color_name").value;
}
function take_snapshot()
{
    save("yo.png");
}