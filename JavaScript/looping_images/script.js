const headerImgEl = document.getElementById('header-img');
const images = ["/images/bacon_in_the_woods.png", "/images/tulips.png", "/images/downed_tree.png"];

const displayHeaderImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    headerImgEl.src = images[randomIndex];
    headerImgEl.style.width = '10%';
}

window.addEventListener('load', displayHeaderImage);