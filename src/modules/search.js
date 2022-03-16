import { getData } from "./getData";
import { createCards } from "./createCards";
import { createList } from "./createList"
import { debounce } from "./helper";

export const search = () => {
    const container = document.querySelector('.container');
    const inputSearch = document.querySelector('.input-search');
    const debounceSearch = debounce(() => {
        
        getData(`http://localhost:3000/heroes/?name_like=${inputSearch.value}`)
            .then(data => {
                container.classList.contains('noActive-container') ? createList(data) : createCards(data)
        })
    }, 500)

    inputSearch.addEventListener('input', debounceSearch)
}
