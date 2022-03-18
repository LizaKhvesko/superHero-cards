export const chooseFilm = () => {
    const select = document.querySelector('select');
    let cards = document.querySelectorAll('.card');
    select.options[0].selected = true;
    select.addEventListener('change', () => {
        let film = select.options[select.selectedIndex].textContent;
        render(film, cards);
    })

    const render = (film, cards) => {
    cards.forEach(card => {
        card.style.display = 'block';
        let movies = card.querySelector('.movies');
        if (film === 'All Films') {
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
    })}
}