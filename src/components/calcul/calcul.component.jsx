import React from 'react'
import './calcul.styles.css'

export const Calcul = ({props}) => {
    const tab = props
    let calcul = 0
    let convert

    // boucle sur les distances parcourues, conversion en number et addition au total

    if(tab.length > 0) {
        for(let i =0; i < tab.length; i++) {
            convert = parseInt(tab[i].km, 10)
            calcul += convert
        }
    }

    return(
        <div className='calcul'>
            <h2>Distance totale: <span>{calcul}</span> km </h2>
        </div>
    )
}