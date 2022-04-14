noseX = 0;
noseY = 0;
lwristX = 0;
rwristX = 0;
difference = 0;

function preload()
{}

function setup()
{
    canvas = createCanvas(550, 500);
    canvas.position(900, 220);
    video = createCapture(VIDEO);
    video.position(50, 230);
    pose_model = ml5.poseNet(video, modelLoaded);
    pose_model.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet has been loaded succesfully");
}

function draw()
{
    background("blue");
    textSize(difference);
    stroke("green")
    fill("orange");
    text("Akshat", noseX, noseY);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x + y values: x- "+noseX+" y- "+noseY);
        lwristX = results[0].pose.leftWrist.x;
        rwristX = results[0].pose.rightWrist.x;
        console.log("Wrist values: leftwrist- "+lwristX+" rightwrist- "+rwristX);
        difference = floor(lwristX - rwristX);
        console.log(difference);
    }
}