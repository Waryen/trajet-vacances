import React from 'react'
import './form.styles.css'

export const Form = ({handleChangePlace, handleChangeDistance, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <label>Lieu: </label>
        <input
            type='text'
            id='place'
            placeholder='Kaboul'
            onChange={handleChangePlace}
        />
        <label>Distance (Km): </label>
        <input
            type='number'
            id='distance'
            placeholder='12345'
            onChange={handleChangeDistance}
        />
        <button type='submit' id='send'>Ajouter</button>
    </form>
)