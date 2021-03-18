const apiURL= 'https://restcountries.eu/rest/v2/all'

const getCountries = () => {
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        return response
    })
}

export default getCountries