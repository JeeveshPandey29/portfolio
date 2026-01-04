// Select all "view-certificate" buttons
const viewButtons = document.querySelectorAll('.view-certificate');
// Select the popup and close button
const popup = document.getElementById('certificatePopup');
const closeButton = popup.querySelector('.close-button');

// Add click event listeners to each button
viewButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const projectCard = button.closest('.project-card'); // Find the related project card
        const certificateImage = projectCard.querySelector('.project-image img'); // Get the certificate image
        const popupImage = popup.querySelector('.full-certificate'); // Get the popup image element

        // Set the popup image source to the clicked certificate's image source
        popupImage.src = certificateImage.src;

        // Show the popup
        popup.classList.add('visible');
        document.querySelector('.project-container').classList.add('blurred'); // Blur the background
    });
});

// Add event listener to the close button
closeButton.addEventListener('click', () => {
    popup.classList.remove('visible'); // Hide the popup
    document.querySelector('.project-container').classList.remove('blurred'); // Remove background blur
});
