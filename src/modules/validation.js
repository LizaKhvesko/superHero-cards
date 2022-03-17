export const validation = () => {
    const inputSearch = document.querySelector('.input-search');
    inputSearch.addEventListener('input', (e) => {
        const reg = /[^a-z\s]+/gi
        e.target.value = e.target.value.replace(reg, '');
    })
}