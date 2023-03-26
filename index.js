var musicList = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];

// button presses

for (let index = 0; index < document.querySelectorAll("button").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        });
    }
    
// key presses 

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/" + musicList[0] + ".mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/" + musicList[1] + ".mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/" + musicList[2] + ".mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/" + musicList[3] + ".mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/" + musicList[4] + ".mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/" + musicList[5] + ".mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/" + musicList[6] + ".mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}