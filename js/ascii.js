window.onload = function() {
    "use strict";


    let timer = null;

    /* assign event handler as respect to their id */
    let startButton = document.getElementById("start");
    startButton.onclick = setAnimation;

    let stopButton = document.getElementById("stop");
    stopButton.onclick = resetViewer;

    let selectFontSize = document.getElementById("fontsize");
    selectFontSize.onchange = setFontSize;

    let getTextArea = document.getElementById("text-area");

    let selectAnimation = document.getElementById("animation");

    let isChecked = document.getElementById("turbo");
    isChecked.onclick = turboOnChecked;

    /* change the font size in the text area */
    function setFontSize(){
/*        Optional code for the function using if else*/
        /*if(selectFontSize.value === "Tiny"){getTextArea.style.fontSize = "7pt";}
        else if(selectFontSize.value === "Small"){getTextArea.style.fontSize = "10pt";}
        else if(selectFontSize.value === "Medium"){getTextArea.style.fontSize = "12pt";}
        else if(selectFontSize.value === "Large"){getTextArea.style.fontSize = "16pt";}
        else if(selectFontSize.value === "Extra Large"){getTextArea.style.fontSize = "24pt";}
        else if(selectFontSize.value === "XXL"){getTextArea.style.fontSize = "32pt"}*/

        /*Avoiding if else code to make it simpler*/
        let size = selectFontSize.value;
        if(size===null){size="12pt";}
        getTextArea.style.fontSize = parseInt(size) + 'pt';
    }

    /*this function set the animation in the viewer as selected in the drop down */
    function setAnimation(){

        /*disable start button and enable stop button on starting animation*/
        startButton.disabled = true;
        stopButton.disabled = false;

        /*select respective animation */
        if(selectAnimation.value === "Exercise"){
            doThisAnimation(ANIMATIONS["Exercise"]);
        }
        else if(selectAnimation.value === "Juggler"){
            doThisAnimation(ANIMATIONS["Juggler"]);
        }
        else if(selectAnimation.value === "Bike"){
            doThisAnimation(ANIMATIONS["Bike"]);
        }
        else if(selectAnimation.value === "Dive"){
            doThisAnimation(ANIMATIONS["Dive"]);
        }
        else if(selectAnimation.value === "Blank"){
            resetViewer();
        }
    }

    /*convert the animation string into array to display each frame repeatedly*/
    function doThisAnimation(animationType){
        const splitFrames = animationType.split("=====\n");
        let index = 0;
        timer = setInterval(function(){repeatAnimation(splitFrames[index++%splitFrames.length])},250);
    }

    /*display a frame in text area*/
    function repeatAnimation(frame){
        getTextArea.innerHTML = frame;
    }

    /*this function clear the text box and reset timer*/
    function resetViewer(){
        getTextArea.innerHTML = "";
        clearTimeout(timer);
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    /*this function speed up animation*/
    function turboOnChecked(){
        if(isChecked.checked === true){
            window.setInterval.timeout = "50ms"
        }else{
            window.setInterval.timeout = "250ms";
        }
    }
};