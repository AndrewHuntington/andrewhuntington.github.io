// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  
  // Set clicked image as main image.
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newImageAlt = thumbnail.alt

      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);
    });
  });
}