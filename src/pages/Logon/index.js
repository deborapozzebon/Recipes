import React from 'react'

import './style.css'

import logoImage from '../../assets/logo.jpg'

function Logon() {
    return (
        <div className='row'>
            <div id='rc-left' className='column'>
                <img className='logo' src={logoImage} alt="Recipies"/>
            </div>
            <div id='rc-right' className='column'>
                <h1>Coluna 2</h1>
            </div>
        </div>
    )
}

export default Logon; 