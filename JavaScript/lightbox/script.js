// Select all anchor elements containing images
const imageLinks = document.querySelectorAll('.grid a');

// Loop through each image and add event listener
imageLinks.forEach(link => {
    const image = link.querySelector('img');
    link.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Apply a zoom effect
        image.style.transform = 'scale(1.5)';
        image.style.transition = 'transform 0.3s ease'; // Smooth transition

        // Optionally, reset after a few seconds
        setTimeout(() => {
            image.style.transform = 'scale(1)';
        }, 1000);
    });
});
