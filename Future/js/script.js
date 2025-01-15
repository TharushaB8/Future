// Movie Data
const movieData = {
    "The Dark Knight": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    "Mad Max: Fury Road": "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord and his army.",
    "Gladiator": "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
    "John Wick": "A retired hitman seeks vengeance against those who wronged him and killed his dog.",
    "Avengers: Endgame": "The Avengers assemble once more to undo the damage caused by Thanos in the previous film.",
    "Die Hard": "New York cop John McClane battles terrorists who have taken hostages in a Los Angeles skyscraper.",
    "The Matrix": "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    "Spider-Man: No Way Home": "Spider-Man faces new challenges as he confronts dangerous enemies from different universes.",
    // Add other movie descriptions here...
};

// Open Modal
function openModal(movieName) {
    const modal = document.getElementById('movieModal');
    const title = document.getElementById('movieTitle');
    const description = document.getElementById('movieDescription');
    
    title.textContent = movieName;
    description.textContent = movieData[movieName];
    
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
}

// Download Movie
function downloadMovie(resolution) {
    alert(`Downloading ${resolution} version of the movie.`);
    // You can add real download logic here (like providing a URL or file download functionality)
}
// Full Data for Movies, Animes, and TV Series
const items = [
    // Movies
    { type: 'Movie', name: 'The Dark Knight', link: '#action-movies' },
    { type: 'Movie', name: 'Mad Max: Fury Road', link: '#action-movies' },
    { type: 'Movie', name: 'Gladiator', link: '#epic-movies' },
    { type: 'Movie', name: 'John Wick', link: '#action-movies' },
    { type: 'Movie', name: 'Avengers: Endgame', link: '#superhero-movies' },
    { type: 'Movie', name: 'Die Hard', link: '#action-movies' },
    { type: 'Movie', name: 'The Matrix', link: '#sci-fi-movies' },
    { type: 'Movie', name: 'Spider-Man: No Way Home', link: '#superhero-movies' },
    // Animes
    { type: 'Anime', name: 'Naruto', link: '/animes.html' },
    { type: 'Anime', name: 'Attack on Titan', link: '/animes.html' },
    { type: 'Anime', name: 'One Piece', link: '/animes.html' },
    { type: 'Anime', name: 'Death Note', link: '/animes.html' },
    { type: 'Anime', name: 'Dragon Ball Z', link: '/animes.html' },
    { type: 'Anime', name: 'My Hero Academia', link: '/animes.html' },
    { type: 'Anime', name: 'Demon Slayer', link: '/animes.html' },
    { type: 'Anime', name: 'Jujutsu Kaisen', link: '/animes.html' },
    // TV Series
    { type: 'TV Series', name: 'Breaking Bad', link: '/tvseries.html' },
    { type: 'TV Series', name: 'Stranger Things', link: '/tvseries.html' },
    { type: 'TV Series', name: 'The Witcher', link: '/tvseries.html' },
    { type: 'TV Series', name: 'Game of Thrones', link: '/tvseries.html' },
    { type: 'TV Series', name: 'The Mandalorian', link: '/tvseries.html' },
    { type: 'TV Series', name: 'The Boys', link: '/tvseries.html' },
    { type: 'TV Series', name: 'Sherlock', link: '/tvseries.html' },
    { type: 'TV Series', name: 'House of the Dragon', link: '/tvseries.html' }
];

// Filter and Display Results
function filterResults() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (input.trim() === '') {
        resultsContainer.style.display = 'none';
        return;
    }

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(input)
    );

    if (filteredItems.length > 0) {
        resultsContainer.style.display = 'block';
        filteredItems.forEach(item => {
            const resultItem = document.createElement('a');
            resultItem.href = item.link;
            resultItem.textContent = `${item.type}: ${item.name}`;
            resultItem.style.display = 'block'; // Ensure each result appears on a new line
            resultItem.style.color = '#f0f0f0'; // Match theme
            resultItem.style.padding = '5px 0'; // Add spacing between results
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.style.display = 'none';
    }
}

// Clear Search Input
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
}
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Example of fixing the 'onRequest' and 'logger' issues:
const onRequest = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});
