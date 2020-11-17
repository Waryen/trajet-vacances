import React from 'react'
import './list.styles.css'

export const List = ({props}) => {
    const tab = props

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