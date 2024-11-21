const pickImage = () => {
    // Container to store images (array), including the 'images/' directory path
    const images = [
        "images/bend_in_the_road.png", "images/pink_blossoms.png", "images/falling_petals.png",
        "images/potted_plants.png", "images/tree_with_white_blooms.png", "images/tulips.png",
        "images/white_buds_on_tree.png", "images/red_maple.png", "images/bacon_in_the_woods.png",
        "images/munising.jpg"
    ];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * images.length);

    // Grab the img element which is in the header
    const headerImageEl = document.getElementById('header_img');

    // Log the element to check if it's selected correctly
    console.log("headerImageEl:", headerImageEl);  

    // Set the `src` to the randomly selected image
    headerImageEl.src = images[randomIndex];

    // Log the updated src to verify it's correct
    console.log("New Image Src:", headerImageEl.src);  
}

// Event listener for the window load event
window.addEventListener('load', pickImage);
