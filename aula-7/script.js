const movieInput = document.getElementById("movie-input");
const btnSubmit = document.getElementById("btn-submit");
const moviesList = document.getElementById("movies-list");

const movies = [
  {
    name: "O Poderoso Chefão",
    director: "Copolla",
    year: 1972,
    description: "Lorem Ipsum dolor sit atmet",
  },
  {
    name: "Meninas Malvadas",
    director: "Lindsay Lohan",
    year: 2004,
    description: "Lorem Ipsum dolor sit atmet",
  },
  {
    name: "Os trapalhões na calda do cumeta",
    director: "Didi Mocó",
    year: 1962,
    description: "Lorem Ipsum dolor sit atmet",
  },
];

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const movieName = movieInput.value;

  if (movieName) {
    addMovie(movieName);
    movieInput.value = "";
  }
});

// CREATE
function addMovie(movieName) {
  const newMovie = {
    name: movieName,
    director: "TEST",
    year: 2000,
    description: "TEST",
  };

  movies.unshift(newMovie);
  renderMovies();
}

// READ
function renderMovies() {
  moviesList.innerHTML = movies.map((m) => `<li>${m.name}</li>`).join("");
}

// UPDATE
function updateMovie() {}

// DELETE
function deleteMovie() {}

window.onload = renderMovies;
