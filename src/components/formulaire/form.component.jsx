import React from 'react'
import './form.styles.css'

export const Form = ({handleChange, handleSubmit, lieu}) => {

    // formulaire d'ajout des lieux et des distances
    
    return (
        <form method='post'>
            <label>Lieu: </label>
            <input
                type='text'
                id='lieu'
                name='name'
                placeholder='Kaboul'
                //value={lieu.name}
                onChange={handleChange}
            />
            <label>Distance (Km): </label>
            <input
                type='number'
                id='km'
                name='km'
                placeholder='12345'
                //value={lieu.km}
                onChange={handleChange}
            />
            <button type='submit' id='send' onClick={handleSubmit}>Ajouter</button>
        </form>
    )
}