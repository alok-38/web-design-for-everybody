/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    // target div
    const imageDivEl = document.getElementById('image');
    // Change the background image of the target div to the source of the hovered image
    imageDivEl.style.backgroundImage = `url(${previewPic.src})`;
    // Change the text inside the div to the alt text of the hovered image
    imageDivEl.innerHTML = previewPic.alt;
}

function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */
    const imageDivEl = document.getElementById('image');
    // Reset the background image to the original image (default image URL)
    imageDivEl.style.background = '#8e68ff';

    imageDivEl.innerHTML = "Hover over an image below to display here.";

}