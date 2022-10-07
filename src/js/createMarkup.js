export function createMarkup(countries) {
    if (countries.length > 1) {
        
        return countries.map(({name, flags}) => {
            return `<li class="country-item">
                    <img class="country-flag" width="60px" src=${flags.svg}>
                    <h1 class="country-name">${name}</h1>
                    </li>`
        }).join('')
    }
    if (countries.length === 1) {

        return countries.map(({name, capital, population, flags, languages}) => {
            return `<img class="country-flag" width="60px" src=${flags.svg}>
                    <h1 class="country-name">${name}</h1>
                    <p class="countre-capital">Capital: ${capital}</p>
                    <p class="country-population">Population: ${population}</p>
                    <p class="country-languages">Languages: ${languages[0].name}</p>`
        }).join('')
    }
}