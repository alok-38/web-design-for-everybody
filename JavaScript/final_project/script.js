const heroImgEl = document.getElementById('hero-img');
const imgContainer = document.querySelectorAll('.img-container img');

// Create a div for displaying the alt text (without modifying the HTML)
const altTextEl = document.createElement('div');
altTextEl.style.position = 'absolute';
altTextEl.style.top = '10px';
altTextEl.style.left = '10px';
altTextEl.style.color = 'white';
altTextEl.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
altTextEl.style.padding = '5px';
altTextEl.style.borderRadius = '5px';
document.body.appendChild(altTextEl);

// Set the initial alt text from the hero image
altTextEl.innerText = heroImgEl.alt || 'Hover or Tab over to display image';

// Add tabindex to all images to make them focusable
imgContainer.forEach(image => {
    image.setAttribute('tabindex', '0');  // Makes image focusable

    image.addEventListener('mouseenter', (event) => {
        // Show the image in the hero container
        heroImgEl.src = event.target.src;
        heroImgEl.style.display = 'block';
        heroImgEl.style.width = '750px';

        // Update the alt text with the hovered image's alt
        altTextEl.innerText = event.target.alt || 'No description available';
        altTextEl.style.display = 'block'; // Show the alt text when an image is hovered

        const heroDiv = document.querySelector('.hero');
        heroDiv.style.width = '44%';
    });

    image.addEventListener('mouseleave', () => {
        // When the mouse leaves the image, hide the hero image
        heroImgEl.style.display = 'none';

        // Show the initial alt text when mouse leaves
        altTextEl.innerText = image.alt || 'Hover or Tab over to display image';
        altTextEl.style.display = 'block'; // Show the alt text when the mouse leaves the image
    });

    // Focus event listener
    image.addEventListener('focus', () => {
        // When the image is focused, display the alt text
        altTextEl.innerText = image.alt || 'No description available';
        altTextEl.style.display = 'block'; // Show the alt text when focused
    });

    // Blur event listener
    image.addEventListener('blur', () => {
        // When the image loses focus, revert to the default alt text
        altTextEl.innerText = image.alt || 'Hover or Tab over to display image';
        altTextEl.style.display = 'block'; 
    });
});

// Listen for the Tab key press on the whole document
document.addEventListener('keydown', (event) => {
    // Check if the Tab key (key code 9) is pressed
    if (event.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.tagName === 'IMG') {
            // If an image is focused, show it in the hero container
            heroImgEl.src = focusedElement.src;
            heroImgEl.style.display = 'block';
            heroImgEl.style.width = '750px';

            // Update the alt text based on the focused image
            altTextEl.innerText = focusedElement.alt || 'No description available';
            altTextEl.style.display = 'block';

            const heroDiv = document.querySelector('.hero');
            heroDiv.style.width = '44%';
        }
    }
});
