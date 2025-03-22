// Load places dynamically
document.addEventListener("DOMContentLoaded", loadPlaces);

function loadPlaces() {
    fetch('data/places.json')
        .then(response => response.json())
        .then(data => {
            const placesContainer = document.querySelector('.places-container');
            placesContainer.innerHTML = '';

            data.places.forEach(place => {
                const placeCard = document.createElement('div');
                placeCard.className = 'place-card';

                placeCard.innerHTML = `
                    <img src="${place.image}" alt="${place.name}" style="width:100%; height:150px;">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                `;

                placesContainer.appendChild(placeCard);
            });
        })
        .catch(error => console.error('Error loading places:', error));
}

// Add user reviews
function addReview() {
    const reviewInput = document.querySelector('#reviewInput').value;
    const reviewsContainer = document.querySelector('#reviews-container');

    if (reviewInput.trim()) {
        const review = document.createElement('p');
        review.textContent = reviewInput;
        reviewsContainer.appendChild(review);
        document.querySelector('#reviewInput').value = '';
    }
}