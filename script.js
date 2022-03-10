const container = document.querySelector('.container');
const filterFilms = document.querySelector('.filter-films');
let select = document.querySelector('select');

const createHeroPage = async() => {
    const data = await getData();
    doOptions(data);
    createCards(data);
    chooseFilm();
}

const getData = async() => {
    let response = await fetch('dbHeroes.json');
    let data = await response.json();
    return data;
}

const chooseFilm = () => {
    let cards = document.querySelectorAll('.card');
    select.addEventListener('change', () => {
        let film = select.options[select.selectedIndex].textContent;
        render(film, cards);
    })
}

const doOptions = (data) => {
    let movies = [];
    let hasMovies = data.filter(elem => elem.movies);
    hasMovies.forEach(item => {
        let roles = item.movies;
        roles.forEach(role => {
            if (!movies.includes(role)) {
                movies.push(role);
            }
        })
    })
    select.innerHTML = '<option value="other">Choose film</option>';
    movies.forEach((movie, i)=> {
        let  option = `
        <option value="${i}">${movie}</option>
        `
        select.innerHTML += option;
    })
}

const createCards = (data) => {
    const heroCards = document.createElement('div');
    heroCards.classList.add('hero-cards');
    heroCards.innerHTML = '';
    data.forEach(card => {
        let heroName = card.name ? `<div class="hero-name">${card.name}</div>` : '';
        let cardPhoto = card.photo ? card.photo : '';
        let cardActors = card.actors ? ` <div><b>Actor</b>: ${card.actors}</div>` : '';
        let cardGender = card.gender ? ` <div><b>Gender</b>: ${card.gender}</div>` : '';
        let dateBirthBlock = card.birthDay ? `<div> <b>Birth</b>: ${card.birthDay}</div>` : '';
        let dateDeathBlock = card.deathDay ? `<div> <b>Death</b>: ${card.deathDay}</div>` : '';
        let species = card.species ? `<div><b>Species</b>: ${card.species}</div>` : '';
        let movies = card.movies ? `<div class="movies"><b>Movies</b>: ${card.movies.join(', ')}</div>` : '';
        let cardStatus = card.status ? ` <div><b>Status</b>: ${card.status}</div>` : '';

        let hero = `<div class="card">
            ${heroName}
            <div class="img-box">
            <img class="hero-img" src="${cardPhoto}" alt="hero-photo">
            </div>
            <div class="info">
            ${cardActors}
            ${cardGender}
            ${dateBirthBlock}
            ${dateDeathBlock}
            ${species}
            ${movies}
            ${cardStatus}
            </div>
        </div>`
       heroCards.innerHTML += hero; 
    })
    container.append(heroCards);
}

const render = (film, cards) => {
    cards.forEach(card => {
        card.style.display = 'block';
        let movies = card.querySelector('.movies');
        if (film === 'Choose film') {
            return
        }else if (!movies) {
            card.style.display = 'none';
        } else {
            let moviesLength = 'Movies: '.length;
            let movies = card.querySelector('.movies').textContent.slice(moviesLength).split(', ');
            if(movies.every(item => item !== film)) {
                card.style.display = 'none';
            }
        }
    })
}

createHeroPage()
