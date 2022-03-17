export const createList = (data) => {
    const list = document.querySelector('.list');

    list.innerHTML = ''
    const heroCards = document.createElement('ul');
    heroCards.classList.add('hero-cards_list');
    heroCards.innerHTML = '';
    data.forEach((card, i) => {
        let hero = `<li class="card-list">${card.name}</li>`
       heroCards.innerHTML += hero; 
    })
    list.append(heroCards);
}