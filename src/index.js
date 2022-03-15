import { getData } from "./modules/getData";
import { createCards } from "./modules/createCards";
import { doOptions } from "./modules/doOptions";
import { filterGender } from "./modules/filterGender";
import { chooseFilm } from "./modules/chooseFilm";


getData('http://localhost:3000/heroes')
    .then(data => createCards(data))
    
getData('http://localhost:3000/heroes')
    .then(data => doOptions(data))
    .then(() => chooseFilm());
filterGender();


