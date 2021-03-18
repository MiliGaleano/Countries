import React from 'react'
import './styles.css'

const CountryCard = ({country, handleModal, mode1}) => {
    const {numericCode, flag, name, population, region, capital} = country

    const handleClick = () => {
        handleModal(name)
    }

    return(
        <div key={numericCode} className={`divCountryCard ${mode1}`}>
            <img src={flag} alt={`${name} flag`} className='flagImgCard' onClick={handleClick}/>
            <div className='infoCountryCard'>
                <h1 className='NameCard'>{name}</h1>
                <h2 className='InfoCard'><span className='SpanInfoCard'>Population:</span> {(new Intl.NumberFormat("de-DE").format(population))}</h2>
                <h2 className='InfoCard'><span className='SpanInfoCard'>Region:</span> {region}</h2>
                <h2 className='InfoCard'><span className='SpanInfoCard'>Capital:</span> {capital}</h2>
            </div>
        </div>
    )
}

export default CountryCard