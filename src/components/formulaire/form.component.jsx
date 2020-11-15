import React from 'react'
import './form.styles.css'

export const Form = ({handleChange, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <label>Nom: </label>
        <input
            type='text'
            id='name'
            onChange={handleChange}
        />
        <label>Distance (Km): </label>
        <input
            type='number'
            id='distance'
            onChange={handleChange}
        />
        <button type='submit' id='send'>Ajouter</button>
    </form>
)