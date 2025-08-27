//This section establishes high level variables.
let POWER = 3;
let TOUGHNESS = 3;
let THUMBS = 1;
let nQuantity = 1;
let WINCOUNT = 0;
let WONFLIP = true;
let THUMBINPLAY = false;
let INAIR = false;
let HEADS = true;

    
//#region Element References
    const powerAddButton = document.getElementById("powerAddButton");
    const powerSubtractButton = document.getElementById("powerSubtractButton");
    const powerNumber = document.getElementById("powerNumber");
    const doubleButton = document.getElementById("doubleButton");
    const resetButton = document.getElementById("resetButton");
    const halveButton = document.getElementById("halveButton");
    const toughnessNumber = document.getElementById("toughnessNumber");
    const toughnessAddButton = document.getElementById("toughnessAddButton");
    const toughnessSubtractButton = document.getElementById("toughnessSubtractButton");
    const thumbNumber = document.getElementById("thumbNumber");
    const thumbAddButton = document.getElementById("thumbAddButton");
    const thumbSubtractButton = document.getElementById("thumbSubtractButton");
    const thumbCheckbox = document.getElementById("thumbCheckbox");
    const singleFlipButton = document.getElementById("singleFlipButton");
    const inAirCheckbox = document.getElementById("inAirCheckbox");
    const nFlipsButton = document.getElementById("nFlipsButton");
    const nQuantityNumber = document.getElementById("nQuantityNumber");
    const nAddButton = document.getElementById("nAddButton");
    const nSubtractButton = document.getElementById("nSubtractButton");
    const flipUntilLoseButton = document.getElementById("flipUntilLoseButton");
    const bottomHalfDiv = document.getElementById("bottomHalfDiv");
//#endregion 

//#region In-Depth Functions
function getSide(){
    let tempRandom = Math.floor(Math.random() * 2);

    if (tempRandom === 1)
    {
        HEADS = true;
        return './images/heads.png';
    }
    else
    {
        HEADS = false;
        return './images/tails.png';
    }
};

function flip(){
    WONFLIP = false;
    
    let newLine = document.createElement('div');
    newLine.setAttribute('class', 'line');
    bottomHalfDiv.appendChild(newLine);
    
    if(THUMBINPLAY){
        for(i=0;i<(2**THUMBS);i++){
            let newImage = document.createElement('img');
            newImage.setAttribute('class', 'coin');
            newImage.setAttribute('alt', 'No Image');
            newImage.setAttribute('src', getSide());
            newLine.appendChild(newImage);

            if(HEADS){WONFLIP = true;};
        }
    }
    else{
        let newImage = document.createElement('img');
        newImage.setAttribute('class', 'coin');
        newImage.setAttribute('alt', 'No Image');
        newImage.setAttribute('src', getSide());
        newLine.appendChild(newImage);

        if(HEADS){WONFLIP = true;};
    }

    if(WONFLIP){WINCOUNT++;};
};

function singleFlip(){
    clear();

    if(INAIR){
        flip();
        WINCOUNT = 0;
    }
    else{
        flip();
        doubleWins();
    }
};

function nFlips(){
    clear();
    nQuantity = nQuantityNumber.value;
    for (let i = 0; i < nQuantity; i++) {
        flip();
    }
    doubleWins();
};

function flipUntilLose(){
    clear ();
    WONFLIP = true;

    while (WONFLIP) {
        flip();
    }
    doubleWins();
};

function clear(){
bottomHalfDiv.innerHTML = '<div id="winDisplay"></div>';
};

function doubleWins(){
    //displayWins is included because they are always called at the same time, but it can be called individually if needed.
    
    for(i = 0; i < WINCOUNT; i++){
        double();
    }
    displayWins();
    WINCOUNT = 0;
};

function double(){
        //This is separated out so it can be called individually by the event listener.
    
        POWER = parseFloat(POWER) * 2;
        TOUGHNESS = parseFloat(TOUGHNESS) * 2;
        powerNumber.value = POWER;
        toughnessNumber.value = TOUGHNESS;
}

function displayWins(){
    displayDiv  = document.getElementById('winDisplay');
    displayDiv.innerText = WINCOUNT.toString() + ' wins';
}
//#endregion

function addPower() {
    POWER = parseFloat(POWER) + 1;
    powerNumber.value = POWER; 
}

function subtractPower() {
    POWER = parseFloat(POWER) - 1;

    if(POWER == -1){
        POWER = 0;
        powerNumber.value = 0;
    }
    else{
        powerNumber.value = POWER;
    }
}

function reset() {
    POWER = 3;
    TOUGHNESS = 3;
    powerNumber.value = POWER;
    toughnessNumber.value = TOUGHNESS;
}

function halve() {
    if(POWER <= 3){}
    else{
        POWER = parseFloat(POWER) / 2;
    }
    if(TOUGHNESS <= 3){}
    else{
        TOUGHNESS = parseFloat(TOUGHNESS) / 2;
    }

    powerNumber.value = POWER;
    toughnessNumber.value = TOUGHNESS;  
}

function addToughness() {
    TOUGHNESS = parseFloat(TOUGHNESS) + 1;
    toughnessNumber.value = TOUGHNESS;
}

function subtractToughness() {
    TOUGHNESS = parseFloat(TOUGHNESS) - 1;

    if(TOUGHNESS == -1){
        TOUGHNESS = 0;
        toughnessNumber.value = 0;
    }
    else{
        toughnessNumber.value = TOUGHNESS;
    }
}

function addThumb() {
    THUMBS = parseFloat(THUMBS) + 1;
    thumbNumber.value = THUMBS;
}

function subtractThumb() {
    THUMBS = parseFloat(THUMBS) - 1;

    if(THUMBS == 0){
        THUMBS = 1;
        thumbNumber.value = 1;
    }
    else{
        thumbNumber.value = THUMBS;
    }
}

function toggleThumb() {
    THUMBINPLAY = !THUMBINPLAY;
}

function toggleInAir() {
    INAIR = !INAIR;
}

function addN() {
    nQuantity = parseFloat(nQuantity) + 1;
    nQuantityNumber.value = nQuantity;
}

function subtractN() {
    nQuantity = parseFloat(nQuantity) - 1;
        
    if(nQuantity == -1){
        nQuantity = 0;
        nQuantityNumber.value = 0;
    }
    else{
        nQuantityNumber.value = nQuantity;
    }
}