import './css/styles.css';
import { refs } from './js/Refs';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { restcountriesAPI } from './js/restcountries';


const DEBOUNCE_DELAY = 300;
const restcountries = new restcountriesAPI();

const handleInput = event => {
    refs.countryInfo.insertAdjacentElement = '';
    refs.countryList.insertAdjacentElement = '';

    const query = event.target.value;
    const countryName = query.trim().toLowerCase();
    if (!countryName) {
        Notify.failure('Please enter country name to search.');
    return;
    }
    if (countryName.length === 1) {
       Notify.info("Too many matches found. Please enter a more specific name."); 
    }
    restcountries.getCountries(countryName).then(resalts => {
        const markup = createMarkup(resalts);
        if (resalts.length === 1) {
            // refs.countryInfo.insertAdjacentElement('beforeend', markup)
            console.log(markup);
            console.log(refs.countryInfo);
        }
        if (resalts.length > 1) {
            // refs.countryList.insertAdjacentElement('beforeend', markup)
            console.log(markup);
            console.log(refs.countryList);
        }
    });
}
const debounceHandleInput = debounce(handleInput, DEBOUNCE_DELAY);
refs.serchBox.addEventListener("input", debounceHandleInput);



function createMarkup(countries) {
    if (countries.length > 1) {
        
        return countries.map(({name, flags}) => {
            return `<li class="country-item">
                    <svg class="country-flag" width="20" height="20">
                        <use href=${flags.svg}></use>
                    </svg>
                    <h1 class="country-name">${name}</h1>
                    </li>`
        }).join('')
    }
    if (countries.length === 1) {

        return countries.map(({name, capital, population, flags, languages}) => {
            return `<svg class="country-flag" width="20" height="20">
                        <use href=${flags.svg}></use>
                    </svg>
                    <h1 class="country-name">${name}</h1>
                    <p class="countre-capital">Capital: ${capital}</p>
                    <p class="country-population">Population: ${population}</p>
                    <p class="country-languages">Languages: ${languages[0].name}</p>`
        }).join('')
    }
}
