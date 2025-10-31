// Arrays

const DIO_IMAGES = [
    "img/dio0.jpg",
    "img/dio1.jpg",
    "img/dio2.jpg",
    "img/dio3.jpg",
    "img/dio4.jpg",
    "img/dio5.jpg",
    "img/dio6.jpg",
    "img/dio7.jpg",
    "img/dio8.jpg",
    "img/dio9.jpg",
    "img/dio10.jpg",
    "img/dio11.jpg",
    "img/dio12.jpg",
    "img/dio13.jpg",
    "img/dio14.jpg",
    "img/dio15.jpg",
];

const DIO_IMAGES_TITLES = [
    "Smile into the camera for no reason.",
    "Nice view over the Ammersee.",
    "Today we make a side trip trough the Forest. ",
    "Just enjoy the summer sunset.",
    "Oh look, what's on the side walk?",
    "Why this dog is so big?",
    "If I close my eyes, no one could see me.",
    "Always need to wait for my Parents.",
    "A beautiful trip trough flowers along the creek.",
    "Todays trip start on the Windachtal.",
    "Beautiful side trip to the Ammersee.",
    "Look this avenue. It will be a long trip today.",
    "Playing in the snow is my favourite action.",
    "Discover a new avenue today.",
    "Look how brave I can be.",
    "Enjoy the sunset walk trough the forest."
]

// global Variables
const DIALOG_REF = document.getElementById('DialogShowImg');
const DIALOG_TITLES = document.getElementById('HeaderDialogRef');
const CLOSE_HEADER = document.getElementById('HeaderCloseButton');
// let HEADER_REF = document.getElementById('HeaderDialog');
const ARROW_BACKWARD = document.getElementById('ArrowLeft');
const ARROW_FORWARD = document.getElementById('ArrowRight');
const DIALOG_COUNTER = document.getElementById('DialogCounter');

let ACTUAL_INDEX = 0;



// funtions
function renderImages(){
    const IMG_REF = document.getElementById('DioGallery');

    for (let c= 0; c < DIO_IMAGES.length; c++){
        IMG_REF.innerHTML += `<img id="DioImages" aria-haspopup="dialog" aria-controls="DialogImg" onclick="openDialog(${c})" src="${DIO_IMAGES[c]}" alt="">`;
    }
}


function openDialog(listindex) {
    const DIALOG_IMG_REF = document.getElementById('DialogImg');
    DIALOG_IMG_REF.innerHTML = `<img id="BigImg" src="${DIO_IMAGES[listindex]}" alt="">`;
    DIALOG_TITLES.innerHTML = `<h2>${DIO_IMAGES_TITLES[listindex]}</h2>`;

    // HEADER_REF.innerHTML = `${DIALOG_TITLES} ${CLOSE_HEADER}`;
    
    ARROW_BACKWARD.innerHTML = `<img class="DialogNavButton" onclick="goBackward()" src="img/arrow-left.png" alt="Arrow Left">`;
    DIALOG_COUNTER.innerHTML = ` <p id="CounterDialog">${listindex +1} /${DIO_IMAGES.length}</p>`;
    ARROW_FORWARD.innerHTML = `<img class="DialogNavButton" onclick="goForward()" src="img/arrow-right.png" alt="Arrow Right">`;
    
    ACTUAL_INDEX = listindex;
    DIALOG_REF.showModal();
}


// function renderHeader(){
//     DIALOG_TITLES.innerHTML = `<h2>${DIO_IMAGES_TITLES[ACTUAL_INDEX]}</h2>`;
//     CLOSE_HEADER.innerHTML = `<img class="DialogCloseButton" onclick="closeDialog()" src="img/close.png" alt="Close Button">`;
// }

function closeDialog(){
    DIALOG_REF.close();
}


function goForward(){
    if (ACTUAL_INDEX +1 < DIO_IMAGES.length){
        ACTUAL_INDEX++; 
    } else {
        ACTUAL_INDEX = 0;
    }
    DIALOG_TITLES.innerHTML = `<h2>${DIO_IMAGES_TITLES[ACTUAL_INDEX]}</h2>`;
    const TEXT_DIALOG = document.getElementById('CounterDialog');
    TEXT_DIALOG.innerHTML = `${ACTUAL_INDEX +1} /${DIO_IMAGES.length}`;
    const DIALOG_IMG_REF = document.getElementById('BigImg');
    DIALOG_IMG_REF.setAttribute('src', `${DIO_IMAGES[ACTUAL_INDEX]}`);
}

function goBackward(){
    if (ACTUAL_INDEX > 0) {
        ACTUAL_INDEX --;
    } else {
        ACTUAL_INDEX = DIO_IMAGES.length -1;
    }
    DIALOG_TITLES.innerHTML = `<h2>${DIO_IMAGES_TITLES[ACTUAL_INDEX]}</h2>`;
    const TEXT_DIALOG = document.getElementById('CounterDialog');
    TEXT_DIALOG.innerHTML = `${ACTUAL_INDEX +1} / ${DIO_IMAGES.length}`;
    const DIALOG_IMG_REF = document.getElementById('BigImg');
    DIALOG_IMG_REF.setAttribute('src', `${DIO_IMAGES[ACTUAL_INDEX]}`);
}