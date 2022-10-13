import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class restcountriesAPI {
    getCountries(contryName) {
        const url = `https://restcountries.com/v2/name/${contryName}?fields=name,capital,population,flags,languages`
    return fetch(url).then(response => {
        if (!response.ok) {
        Notify.failure("Oops, there is no country with that name")
        throw new Error(response.status);
        }
    return response.json();
    })
    }
}
