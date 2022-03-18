import { getData } from "./getData";
import { createList } from "./createList";

export const changeLists = () => {
    const listBtn = document.querySelector('.list-btn');
    const container = document.querySelector('.container');
    const list = document.querySelector('.list');
    const inputSearch = document.querySelector('.input-search');
    const select = document.querySelector('.filter-films');
    const gender = document.querySelector('.gender');

    listBtn.addEventListener('click', () => {
        container.classList.toggle('noActive-container');
        list.classList.toggle('active-list');
        inputSearch.value = '';
        
        if(container.classList.contains('noActive-container')) {
            listBtn.textContent = 'Detailed List';
            select.style.display = 'none';
            gender.style.display = 'none';
            getData('http://localhost:3000/heroes')
                .then(data => createList(data))
        } else {
            listBtn.textContent = 'List';
            select.style.display = 'block';
            gender.style.display = 'block';
        }
    })
}