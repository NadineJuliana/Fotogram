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

function renderImages(){
    const IMG_REF = document.getElementById('DioGallery');

    for (let c= 0; c < DIO_IMAGES.length; c++){
        IMG_REF.innerHTML += `<img id="DioImages" onclick="openDialog(${c})" src="${DIO_IMAGES[c]}" alt="">`;
    }
}


const DIALOG_REF = document.getElementById('DialogShowImg');

function openDialog(listindex) {
    const DIALOG_IMG_REF = document.getElementById('DialogImg')
    DIALOG_IMG_REF.innerHTML = `<img id="BigImg${listindex}" src="${DIO_IMAGES[listindex]}" alt="">`
    DIALOG_REF.showModal();
}

function closeDialog(){
    DIALOG_REF.close();
}

