import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as lightIcon} from '@fortawesome/free-regular-svg-icons'
import './styles.css'

const Header = ({handleMode, darkMode, mode1}) => {

    const sunIcon = <FontAwesomeIcon icon={lightIcon} />
    const moonIcon = <FontAwesomeIcon icon={faLightbulb} />

    return(
        <div className={`header ${mode1}`}>
            <h1 className='logo'>Where in the world?</h1>
            {(darkMode) 
            ? <div onClick={handleMode} className='buttonMode'>{sunIcon}<h1 className='textMode'>Light mode</h1></div> 
            : <div onClick={handleMode} className='buttonMode'>{moonIcon}<h1 className='textMode'>Dark mode</h1></div>}
        </div>
    )
}

export default Header
