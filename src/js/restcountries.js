export class restcountriesAPI {
    getCountries(contryName) {
        const url = `https://restcountries.com/v2/name/${contryName}?fields=name,capital,population,flags,languages`
    return fetch(url).then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
    })
    }
}