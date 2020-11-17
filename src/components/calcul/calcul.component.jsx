import React from 'react'
import './calcul.styles.css'

export const Calcul = ({props}) => {
    const tab = props
    const newTab = []

    for(let i = 0; i < tab.length; i++) {
        newTab.push(tab[i])
    }

    console.log(newTab)

    return(
        <div className='calcul'>

        </div>
    )
}