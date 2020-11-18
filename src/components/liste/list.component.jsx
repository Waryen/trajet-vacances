import React from 'react'
import './list.styles.css'

export const List = ({props}) => {
    const tab = props

    // boucle sur le state qui contient les lieux et les distances, puis les affichent

    return (
        <div className='list'>
          <ul>
            {tab.map((tab, index) => (
              <li key={index}>
                {tab.name} - {tab.km} km
              </li>
            ))}
          </ul>
        </div>
    )
}