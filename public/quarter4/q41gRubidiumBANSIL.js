let stars = 
    document.getElementsByClassName("star");

let rate = 0

// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    rate = n
}
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

let movieList = JSON.parse(localStorage.getItem("savedMovieList")) || []

displayMovies(movieList);

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    movieList.push({
        title: movieTitle.value,
        year: movieYear.value,
        genre: movieGenre.value,
        rating: rate
    });

    localStorage.setItem("savedMovieList", JSON.stringify(movieList)); 
    displayMovies(movieList);
})

function displayMovies(movieList) {
    displayList = "";

    for (let m = 0; m < movieList.length; m++) {
        let idx = 0;
        let stars = ``;

        while (idx < Number(movieList[m].rating)){
            stars += `<span style="color:gold;">★</span>`;
            idx++;
        }

        displayList += `<div class="movie">${movieList[m].title} (${movieList[m].year}) - ${movieList[m].genre}, Rating: ${stars}</div>`;
    }

    listMovies.innerHTML = displayList;
}