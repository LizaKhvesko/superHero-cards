import { getData } from "./getData";
import { createList } from "./createList";

export const heroCardList = () => {
    const list = document.querySelector('.list');

    list.addEventListener('click', (e) => {
        if(e.target.classList.contains('card-list')) {
             let name = e.target.closest('.card-list').textContent.trim();
             getData(`http://localhost:3000/heroes/?name=${name}`)
                .then(data => createHero(data))
        } else if (e.target.classList.contains('close')) {
            list.innerHTML = '';
            getData('http://localhost:3000/heroes')
            .then(data => createList(data))
        }
    })

    function createHero(data) {
        data = data[0];
        list.innerHTML = '';
        let hero = document.createElement('div');
        let heroName = data.name ? `<div class="hero-name">${data.name}</div>` : '';
        let dataPhoto = data.photo ? data.photo : '';
        let dataActors = data.actors ? ` <div><b>Actor</b>: ${data.actors}</div>` : '';
        let dataGender = data.gender ? ` <div><b>Gender</b>: ${data.gender}</div>` : '';
        let dateBirthBlock = data.birthDay ? `<div> <b>Birth</b>: ${data.birthDay}</div>` : '';
        let dateDeathBlock = data.deathDay ? `<div> <b>Death</b>: ${data.deathDay}</div>` : '';
        let species = data.species ? `<div><b>Species</b>: ${data.species}</div>` : '';
        let movies = data.movies ? `<div class="movies"><b>Movies</b>: ${data.movies.join(', ')}</div>` : '';
        let dataStatus = data.status ? ` <div><b>Status</b>: ${data.status}</div>` : '';
        let dataCitizenship = data.citizenship ? ` <div><b>Citizenship</b>: ${data.citizenship}</div>` : '';
        let dataRealName = data.realName ? ` <div><b>Real name</b>: ${data.realName}</div>` : '';

        hero.innerHTML = `<div class="data">
            <div class="close">X</div>
            ${heroName}
            <div class="img-box">
            <img class="hero-img" src="${dataPhoto}" alt="hero-photo">
            </div>
            <div class="info">
            ${dataRealName}
            ${dataActors}
            ${dataGender}
            ${dateBirthBlock}
            ${dateDeathBlock}
            ${dataCitizenship}
            ${species}
            ${movies}
            ${dataStatus}
            </div>
        </div>`

        list.append(hero)
    }  
}