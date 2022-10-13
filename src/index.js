import './css/styles.css';
import { refs } from './js/refs';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { restcountriesAPI } from './js/restcountries';
import { createMarkup } from './js/createMarkup';


const DEBOUNCE_DELAY = 300;
const restcountries = new restcountriesAPI();

const handleInput = event => {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    const query = event.target.value;
    const countryName = query.trim().toLowerCase();
    if (event.target.value.length === 0) {
        return
    }

    restcountries.getCountries(countryName)
        .then(resalts => {
            const markup = createMarkup(resalts);
        if (resalts.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name."); 
        }
        if (resalts.length > 1 && resalts.length <= 10) {
            refs.countryList.insertAdjacentHTML('beforeend', markup)
        }
        if (resalts.length === 1) {
            refs.countryInfo.insertAdjacentHTML('beforeend', markup)
        }
    });
}
const debounceHandleInput = debounce(handleInput, DEBOUNCE_DELAY);
refs.serchBox.addEventListener("input", debounceHandleInput);




