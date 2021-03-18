import React, {useEffect, useState} from 'react'
import CountryCard from './countryCard'
import Header from './header'
import getCountries from '../services/getCountries'
import ModalCountry from './modalCountry'
import './styles.css'
import Filters from './filters'

const Home = () => {

    const [countries, setCountries] = useState([])
    const [modalCountry, setModalCountry] = useState(false)
    const [idCountry, setIdCountry] = useState('')
    const [select, setSelect] = useState('All')
    const [searched, setSearched] = useState('')
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() =>{
        getCountries()
        .then(response => setCountries(response))
    }, [])

    const handleOpenModal = (x) => {
        setModalCountry(true)
        setIdCountry(x)
    }
    const handleCloseModal = () => {
        setModalCountry(false)
    }

    const handleChange = (e) => {
        setSearched(e.target.value)
    }

    const handleSelect = (e) => {
        setSelect(e.target.value)
        console.log(select)
    }

    const handleMode = () => {
        setDarkMode(!darkMode)
    }

    let listOfCountries
    if (select === 'All') {
        listOfCountries = countries
    } else {
        listOfCountries = countries.filter((x) => x.region === select)
    }

    if (searched !== '') {
        listOfCountries = listOfCountries.filter((x) => x.name.toUpperCase().search(searched.toUpperCase()) !== -1 )
    }

    const mode1 = (darkMode) ? 'darkMode1' : 'clearMode1'
    const mode2 = (darkMode) ? 'darkMode2' : 'clearMode2'

    return(
        <div className={`${mode2} divHome`}>
            {(modalCountry) && <ModalCountry countries={countries} handleModal={handleCloseModal} handleOpModal={handleOpenModal} idCountry={idCountry} mode2={mode2} mode1={mode1}/>}
            <Header handleMode={handleMode} darkMode={darkMode} mode1={mode1}></Header>
            <Filters handleSelect={handleSelect} select={select} handleChange={handleChange} mode1={mode1}/>
            <div className='divCards' style={(listOfCountries.length < 3) ? {justifyContent: 'space-around'} : null}>
            {
                listOfCountries.map((country) => 
                <CountryCard country={country} handleModal={handleOpenModal} mode1={mode1}></CountryCard>
                )
            }
            </div>
        </div>
    )
}

export default Home
