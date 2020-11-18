import React from 'react'
import './list.styles.css'

export const List = ({props}) => {
    const tab = props

    // boucle sur le state qui contient les lieux et les distances, puis les affichent

    return (
        <div className='list'>
          <h2>Liste des lieux</h2>
          <ul>
            {tab.map((tab, index) => (
              <li key={index}>
                <span className='val'>{tab.name}</span> - <span className='val'>{tab.km}</span> km
              </li>
            ))}
          </ul>
        </div>
    )
}