song = "";
song2 = ""

rightWristX = 0;
leftWristX = 0;
rightWristY = 0;
leftWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;


if(scoreRightWrist > 0.2){
    circle(rightWristX, rightWristY,20);
    if(rightWristY>0 && rightWristY <= 100){
        song.play("music2.mp3")
    }
}
if(scoreLeftWrist > 0.2){
    circle(leftWristX, leftWristY,20);
    if(leftWristY >0 && leftWristY <=100){
        song.play("music.mp3")
    }
}
function setup() {
    canvas = createCanvas(700,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload(){
    
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
    
}
function play(){
    song.play();
    song.rate(2);}
function draw() {
    image(video, 0, 0, 700, 600);
    fill("#FF0000");
    stroke("#FF0000");
}
function modelLoaded(){
    console.log("Initiated Model");
}

function gotPoses(results) {
    console.log(results);
    


}
