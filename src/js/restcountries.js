import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class restcountriesAPI {
    getCountries(contryName) {
        const url = `https://restcountries.com/v2/name/${contryName}?fields=name,capital,population,flags,languages`
    return fetch(url).then(response => {
    if (!response.ok) {
        throw new Error(response.status);
        Notify.Error("Oops, there is no country with that name");
    }
    return response.json();
    })
    }
}