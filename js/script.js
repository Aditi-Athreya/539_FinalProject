// JavaScript code to display the movie trailer when the user hovers over a movie
document.addEventListener('DOMContentLoaded', function() {
    const movies = document.querySelectorAll('.grid li');

    movies.forEach(movie => {
        const movieCard = movie.querySelector('.card');
        const movieImage = movie.querySelector('img');
        const trailerLink = movie.dataset.trailer;

        movie.addEventListener('mouseover', function(event) {
            // Create an iframe element
            const iframe = document.createElement('iframe');
            iframe.width = 300; // Set width to match the card width
            iframe.height = 300; // Set height to match the card height
            iframe.src = `https://www.youtube.com/embed/${trailerLink}`;
            iframe.setAttribute('allowfullscreen', ''); // Enable fullscreen option

            // Replace the image with the iframe
            movieImage.replaceWith(iframe);
        });

        // Add event listener to remove the iframe and restore the original image when mouse leaves
        movie.addEventListener('mouseleave', function(event) {
            const iframe = movie.querySelector('iframe');
            if (iframe) {
                iframe.remove();
            }

            // Restore the original image
            movie.querySelector('.card').prepend(movieImage);
        });
    });
});






