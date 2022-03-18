export const doOptions = (data) => {
    const select = document.querySelector('select');
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
    select.innerHTML = '<option value="other" selected>All Films</option>';
    movies.forEach((movie, i)=> {
        let  option = `
        <option value="${i}">${movie}</option>
        `
        select.innerHTML += option;
    })
}