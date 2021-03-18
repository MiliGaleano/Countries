import React from 'react'

const ModalCountry = ({handleModal, idCountry, countries, handleOpModal, mode2, mode1}) => {
    const countryModal= countries.filter((x) => x.name === idCountry)
    const {name, nativeName, capital, currencies, languages, flag, alpha3Code, borders, subregion, topLevelDomain, region, population} = countryModal[0]
   
    const handleClickBorder = (x) => {
        handleOpModal(x)
    }
   
    return(
        <div className={`divModal ${mode2}`}>
            <button onClick={handleModal} className={`${mode1} closeModal`}>close</button>
            <div className='flex'>
                <img src={flag} alt={`${name} flag`} className='imgModal'/>
                <section className='sectionInfoModal'>
                    <h1 className='NameCard'>{idCountry}</h1>
                    <div className='divInfoModal'>
                        <h2 className='InfoCard'><span className='SpanInfoCard'>Native name:</span> {nativeName}</h2>
                        <h2 className='InfoCard'><span className='SpanInfoCard'>Region:</span> {region}</h2>
                        <h2 className='InfoCard'><span className='SpanInfoCard'>Subregion:</span> {subregion}</h2>
                        <h2 className='InfoCard'><span className='SpanInfoCard'>Population:</span> {(new Intl.NumberFormat("de-DE").format(population))}</h2>
                        <h2 className='InfoCard'><span className='SpanInfoCard'>Capital:</span> {capital}</h2>
                    </div>
                    <div className='divInfoModal'>
                        <h2 className='InfoCard'><span className='SpanInfoCard'>Top Level Domain:</span> {topLevelDomain[0]}</h2>
                        <h2 className='InfoCard'><span className='SpanInfoCard'>Currencies:</span> 
                            {currencies.map(currency => 
                                <h3 className='InfoCard' key={currency.code}>{currency.name}</h3>
                            )}
                        </h2>
                        <h2 className='InfoCard'><span className='SpanInfoCard'>Languages:</span> 
                            {languages.map(lan => 
                                <h3 className='InfoCard' key={lan.iso639_1}>{lan.name}</h3>
                            )}
                        </h2>
                    </div>
                    {borders.length !== 0 &&
                    <div>
                        <span className='SpanInfoCard titleBorder'>Borders:</span>
                        <div className='borders'> 
                            {borders.map(border => {
                                const borderCountry = countries.filter((x) => x.alpha3Code === border)
                                const nameBorder = borderCountry[0].name
                                return <h3 className={`InfoCard buttonBorder ${mode1}`} key={border} onClick={()=>handleClickBorder(nameBorder)}>{nameBorder}</h3>
                                }
                            )}
                        </div>
                    </div>
                    }
                </section>
            </div>
        </div>
    )
}

export default ModalCountry


// return <a href={`https://es.wikipedia.org/wiki/${borderCountry[0].name}`} target="_blank" rel='noreferrer'><h3 key={border}>{borderCountry[0].name}</h3></a>