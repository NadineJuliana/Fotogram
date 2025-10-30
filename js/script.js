const dioImages = [
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
    const imgRef = document.getElementById('dioGallery');

    for (let c= 0; c < dioImages.length; c++){
        imgRef.innerHTML += `<img id="dioImages" src="${dioImages[c]}" alt="">`;
    }
}

