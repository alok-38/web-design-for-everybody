// Function for handling the onmouseover event
function handleMouseOver(event) {
    const heroImg = document.getElementById('hero-img');
    heroImg.src = event.target.src;
    console.log('Mouse over event triggered on image:', event.target.alt);
}

// Function for handling the onmouseleave event
function handleMouseLeave(event) {
    const heroImg = document.getElementById('hero-img');
    heroImg.src = '';
    console.log('Mouse leave event triggered on image:', event.target.alt);
}

// Function for handling the onfocus event
function handleFocus(event) {
    const heroImg = document.getElementById('hero-img');
    heroImg.src = event.target.src;
    console.log('Focus event triggered on image:', event.target.alt);
}

// Function for handling the onblur event
function handleBlur(event) {
    const heroImg = document.getElementById('hero-img');
    heroImg.src = '';
    console.log('Blur event triggered on image:', event.target.alt);
}

// Function for handling the onload event
function handleLoad(event) {
    console.log('Image gallery has loaded');
}

// Function to add the tabindex attribute to all images
function addTabIndexToImages() {
    const images = document.querySelectorAll('.img-container img');
    images.forEach(img => {
        img.setAttribute('tabindex', '0');
        img.addEventListener('mouseover', handleMouseOver);
        img.addEventListener('mouseleave', handleMouseLeave);
        img.addEventListener('focus', handleFocus);
        img.addEventListener('blur', handleBlur);
    });
}

// Wait until the window is loaded to ensure all images are loaded
window.onload = function () {
    handleLoad();
    addTabIndexToImages();
};
