import { getData } from "./modules/getData";
import { createCards } from "./modules/createCards";
import { createList } from "./modules/createList";
import { doOptions } from "./modules/doOptions";
import { filterGender } from "./modules/filterGender";
import { chooseFilm } from "./modules/chooseFilm";
import { search } from "./modules/search";
import { changeLists } from "./modules/changeLists";
import { heroCardList } from "./modules/heroCardList";

getData('http://localhost:3000/heroes')
    .then(data => createCards(data))

getData('http://localhost:3000/heroes')
    .then(data => createList(data))
    
getData('http://localhost:3000/heroes')
    .then(data => doOptions(data))
    .then(() => chooseFilm());
filterGender();
search();
changeLists();
heroCardList();


