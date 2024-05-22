const movieInput = document.getElementById("movie-input");
const btnSubmit = document.getElementById("btn-submit");
const moviesList = document.getElementById("movies-list");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const movieName = movieInput.value;

  if (movieInput.value) {
    const newMovie = document.createElement("li");
    newMovie.innerText = movieName;

    const btnEdit = document.createElement("button");
    btnEdit.innerText = "Editar";
    btnEdit.addEventListener("click", () => {
      newMovie.style.color = "red";
    });

    newMovie.append(btnEdit);
    moviesList.append(newMovie);
    movieInput.value = "";
  }
});
