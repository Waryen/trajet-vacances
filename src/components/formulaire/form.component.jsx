import React from 'react'
import './form.styles.css'

export const Form = ({handleChange, handleSubmit, lieu}) => {
    return (
        <form>
            <label>Lieu: </label>
            <input
                type='text'
                name='name'
                placeholder='Kaboul'
                //value={lieu.name}
                onChange={handleChange}
            />
            <label>Distance (Km): </label>
            <input
                type='number'
                name='km'
                placeholder='12345'
                //value={lieu.km}
                onChange={handleChange}
            />
            <button type='submit' id='send' onClick={handleSubmit}>Ajouter</button>
        </form>
    )
}