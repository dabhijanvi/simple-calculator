const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h3>${movie.title}</h3>
  `;
  card.addEventListener('click', () => {
    window.location.href = `details.html?id=${movie.id}`;
  });

  card.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(movie.id)) {
      favorites.push(movie.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${movie.title} added to favorites!`);
    }
  });

  movieList.appendChild(card);
});
