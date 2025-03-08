function changeColorScheme(colorScheme) {//FOR COLOR CHANGING
    document.body.className = 'color-scheme-' + colorScheme;
}

function changeFontSize(fontSize) {// FOR FONT SIZE CHANGING
    document.body.style.fontSize = fontSize + 'px';
}



let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let photos = document.querySelectorAll('.photo .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.photo .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    photos[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

function displayImage(imageUrl, description1, description2) {
    var selectedImage = document.getElementById("selectedImage");
    selectedImage.src = imageUrl;
    selectedImage.alt = description1;

    // Adjust the size of the image
    selectedImage.style.width = "300px"; // Adjust width as needed
    selectedImage.style.height = "150px"; // Adjust height as needed

    var selectedImageDescription = document.getElementById("selectedImageDescription");
    selectedImageDescription.textContent = description2;

    // Highlight the clicked description
    var clickedDescription = event.currentTarget.querySelector(".description");
    clickedDescription.classList.add("highlighted");

    // Remove highlight when another image clicked
    var allDescriptions = document.querySelectorAll(".description");
    allDescriptions.forEach(function (description) {
        description.classList.remove("highlighted");
    });
}

