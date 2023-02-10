const cameraView = document.getElementById("cameraView");
const cameraPaper = document.getElementById("cameraPaper");
const capture = document.getElementById("capture");
const image = document.getElementById("image");

navigator.mediaDevices.getUserMedia({
    video : {
        facingMode: "user"
    },
    audio: false
})
.then((liveStream) => {
    cameraView.srcObject = liveStream;
})
.catch((e)=>{
    console.log(e)
})

capture.addEventListener("click", ()=>{
    if(capture.textContent == "Capture"){
        cameraPaper.setAttribute("value", "1");
        let context = cameraPaper.getContext("2d");
        cameraPaper.width = cameraView.videoWidth;
        cameraPaper.height = cameraView.videoHeight;
        context.drawImage(cameraView, 0, 0);
        return;
    }
    image.classList.add("display");
    capture.textContent = "Capture";
})

cameraPaper.addEventListener("click", ()=>{
    if(cameraPaper.getAttribute("value") == 0)
        return;
    console.log(cameraPaper.innerHTML)
    image.src = cameraPaper.toDataURL('image/webp');
    image.classList.remove("display");
    capture.textContent = "Back";
})