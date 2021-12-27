function setup() {
    canvas = createCanvas(700,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function preload(){
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}