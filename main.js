Webcam.set({
    width:350,
    height:300,
    image_format:"png",
png_quality:10
});

var camera=document.getElementById("camera");

Webcam.attach("#camera");  //this function is used to open the camera

function take_snapshot(){
Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log("ml5 version is",ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/90walsGDB/model.json",modelLoaded);
