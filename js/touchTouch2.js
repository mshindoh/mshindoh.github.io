$(document).ready(function () {
      // Private variables
      var overlay = $('<div id="galleryOverlay">'),
            slider = $('<div id="gallerySlider">'),
            closeButton = $('<div id="closeButton">X</div>'), // Close button for the pop-up
            overlayVisible = false;

      // Appending the markup to the page
      overlay.hide().appendTo('body');
      slider.appendTo(overlay);

      // If the browser does not have support for touch, display the arrows
      if (!("ontouchstart" in window)) {
            overlay.append(prevArrow).append(nextArrow);

            prevArrow.click(function (e) {
                  e.preventDefault();
                  showPrevious();
            });

            nextArrow.click(function (e) {
                  e.preventDefault();
                  showNext();
            });
      }

      // Function to open the pop-up
      function openPopup() {
            overlay.show();
            overlay.addClass('visible');

            // Get the target URL from the data-href attribute of the link
            var targetURL = $('#openPopupLink').data('href');

            // Create an iframe to load the target URL as the pop-up content
            var iframe = $('<iframe>', {
                  src: targetURL,
                  frameborder: 0,
                  scrolling: 'auto'
            });

            // Clear the content of the slider and append the iframe
            slider.empty().append(iframe);

            // Add a close button event listener to close the pop-up
            closeButton.on('click', closePopup);
            slider.append(closeButton);

            // Raise the visible flag
            overlayVisible = true;
      }

      // Event listener for opening the pop-up
      $('#openPopupLink').on('click', function (e) {
            e.preventDefault();
            openPopup();
      });

      // Function to close the pop-up
      function closePopup() {
            overlay.hide().removeClass('visible');
            overlayVisible = false;
            slider.empty();
      }

      // Event listener for closing the pop-up when overlay is clicked
      overlay.on('click', function (e) {
            if (e.target === overlay.get(0)) {
                  closePopup();
            }
      });

      // Event listener for arrow keys
      $(window).bind('keydown', function (e) {
            if (e.keyCode == 27) { //esc
                  closePopup();
            }
      });
});