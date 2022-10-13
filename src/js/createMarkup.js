export function createMarkup(countries) {
    if (countries.length > 1) {
        
        return countries.map(({name, flags}) => {
            return `<li class="country-item">
                    
                    <p class="country-names" style="font-size: 30px"><img class="country-flags" style="margin-right: 10px;" width="40px" src=${flags.svg}>${name}</p>
                    </li>`
        }).join('')
    }
    if (countries.length === 1) {

        return countries.map(({name, capital, population, flags, languages}) => {
            return `<img class="country-flag" width="60px" src=${flags.svg}>
                    <h1 class="country-name">${name}</h1>
                    <p class="countre-capital" style="font-size: 20px">Capital: ${capital}</p>
                    <p class="country-population" style="font-size: 20px">Population: ${population}</p>
                    <p class="country-languages" style="font-size: 20px">Languages: ${languages[0].name}</p>`
        }).join('')
    }
}