const startBtn = document.querySelector('.start-btn')
const requestUrl = '/movies/movies_worldcup/'
const firstMovie = document.querySelector('#first-movie')
const secondMovie = document.querySelector('#second-movie')
const tournament = document.querySelector('.tournament')
const vs = document.querySelector('#vs')
let randomMovies = []
// let firstMovieStatus = false
// let secondMovieStatus = false

function firstSelect () {
  console.log(1)
  randomMovies.push(randomMovies[0])
  randomMovies.shift()
  randomMovies.shift()
  if (randomMovies.length === 4) {
    tournament.innerText = '4강'
  }
  firstMovie.setAttribute("src", `https://image.tmdb.org/t/p/original${randomMovies[0][1]}`)
  secondMovie.setAttribute("src", `https://image.tmdb.org/t/p/original${randomMovies[1][1]}`)
  if (randomMovies.length == 2) {
    const returnUrl = `/movies/${randomMovies[0][0]}/${randomMovies[1][0]}/result_recommend/`
    axios.get(returnUrl)
      .then(res => {
        console.log('성공!')
        setTimeout(function () {
          location.href = `/movies/${randomMovies[0][0]}/${randomMovies[1][0]}/result_recommend/`
        }, 0);
      })
  }
}
      
function secondSelect() {
  console.log(2)
  randomMovies.push(randomMovies[1])
  randomMovies.shift()
  randomMovies.shift()
  if (randomMovies.length === 4) {
    tournament.innerText = '4강'
  }
  firstMovie.setAttribute("src", `https://image.tmdb.org/t/p/original${randomMovies[0][1]}`)
  secondMovie.setAttribute("src", `https://image.tmdb.org/t/p/original${randomMovies[1][1]}`)
  if (randomMovies.length == 2) {
    const returnUrl = `/movies/${randomMovies[0][0]}/${randomMovies[1][0]}/result_recommend/`
    axios.get(returnUrl)
      .then(res => {
        console.log('성공!')
        setTimeout(function () {
          location.href = `/movies/${randomMovies[0][0]}/${randomMovies[1][0]}/result_recommend/`
        }, 0);
      })
  }
}

startBtn.addEventListener('click', (e) => {
  axios.get(requestUrl)
    .then((res) => {
      randomMovies = res.data.random_movies
      console.log(randomMovies)
      
      tournament.innerText = '8강'
      vs.innerText = 'VS'
      firstMovie.setAttribute("src", `https://image.tmdb.org/t/p/original${randomMovies[0][1]}`)
      secondMovie.setAttribute("src", `https://image.tmdb.org/t/p/original${randomMovies[1][1]}`)
      startBtn.setAttribute("style", "display: none;")

      firstMovie.addEventListener('click', firstSelect)
      secondMovie.addEventListener('click', secondSelect)
    })
})