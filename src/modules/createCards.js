export const createCards = (data) => {
    const container = document.querySelector('.container');
    container.innerHTML = ''
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
        let cardCitizenship = card.citizenship ? ` <div><b>Citizenship</b>: ${card.citizenship}</div>` : '';
        let cardRealName = card.realName ? ` <div><b>Real name</b>: ${card.realName}</div>` : '';

        let hero = `<div class="card">
            ${heroName}
            <div class="img-box">
            <img class="hero-img" src="${cardPhoto}" alt="hero-photo">
            </div>
            <div class="info">
            ${cardRealName}
            ${cardActors}
            ${cardGender}
            ${dateBirthBlock}
            ${dateDeathBlock}
            ${cardCitizenship}
            ${species}
            ${movies}
            ${cardStatus}
            </div>
        </div>`
       heroCards.innerHTML += hero; 
    })
    container.append(heroCards);

    let images = document.querySelectorAll('.hero-img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = '1s';
        })
    })
    images.forEach(img => {
        img.addEventListener('mouseout', () => {
            img.style.transform = '';
            img.style.transition = '1s';
        })
    })
}