// Get all the small images and big image when page loads
window.onload = function () {
  // Get the four small images
  var image1 = document.querySelector(".first");
  var image2 = document.querySelector(".secound");
  var image3 = document.querySelector(".third");
  var image4 = document.querySelector(".forth");

  // Get the big image
  var bigImage = document.querySelector(".fifth");

  // Add click events to each small image
  image1.onclick = function () {
    bigImage.src = image1.src;
  };

  image2.onclick = function () {
    bigImage.src = image2.src;
  };

  image3.onclick = function () {
    bigImage.src = image3.src;
  };

  image4.onclick = function () {
    bigImage.src = image4.src;
  };
};
