import React from 'react'
import './form.styles.css'

export const Form = ({handleChange}) => (
    <form>
        <label>Nom: </label>
        <input
            className='addName'
            type='text'
            name='lieu'
            onChange={handleChange}
        />
        <label>Distance en kilomètres: </label>
        <input
            className='addKm'
            type='number'
            name='km'
            onChange={handleChange}
        />
        <button type='submit'>Ajouter</button>
    </form>
)