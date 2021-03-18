import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Filters = ({ handleSelect, select, handleChange, mode1}) => {

    const searchIcon = <FontAwesomeIcon icon={faSearch} />

    return(
        <div className='header topMargin'>
            <div className={`divSearch ${mode1}`}>
                <input type='text' onChange={handleChange} className='inputSearch'/>
                {searchIcon}
            </div>
            <div className='divSelect'>
                    <select value={select} onChange={handleSelect} className='select'>
                        <option className='option' value="All">All</option>
                        <option className='option' value="Africa">Africa</option>
                        <option className='option' value="Americas">Americas</option>
                        <option className='option' value="Asia">Asia</option>
                        <option className='option' value="Europe">Europe</option>
                        <option className='option' value="Oceania">Oceania</option>
                        <option className='option' value="Polar">Polar</option>
                        <option className='option' value="">Other</option>
                    </select>
            </div>
        </div>
    )
}

export default Filters