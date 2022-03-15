import { getData } from "./getData";
import { createCards } from "./createCards";
import { chooseFilm } from "./chooseFilm";

export const filterGender = () => {
    const maleBtn = document.querySelector('.male-btn');
    const femaleBtn = document.querySelector('.female-btn');
    const allBtn = document.querySelector('.all-gender');
    const container = document.querySelector('.container');

    femaleBtn.addEventListener('click', () => {
       filter('http://localhost:3000/heroes/?gender=female&gender=Female')
    })

    maleBtn.addEventListener('click', () => {
       filter('http://localhost:3000/heroes/?gender=male')
    })

    allBtn.addEventListener('click', () => {
       filter('http://localhost:3000/heroes')
    })

    function filter (url) {
       container.innerHTML = '';
       getData(url)
        .then(data => createCards(data))
        .then(() => chooseFilm())
    }
}