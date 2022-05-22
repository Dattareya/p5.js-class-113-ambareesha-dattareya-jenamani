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
    tint(color);
}
function filter()
{
color=document.getElementById("color_name").value;
}