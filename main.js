var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking your selfie...");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speeak_data = "taking your selfie in five seconds";
    var utter_this = new SpeechSynthesisUtterance(speeak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 3000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 250,
    height: 250,
    image_format: jpeg,
    jpeg_quality: 90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}