import React from 'react'
import './list.styles.css'

export const List = ({props}) => {
    const tab = props
    return (
        <div className='list'>
          <ul>
            {tab.map((tab, index) => (
              <li key={index}>
                <ul className='tab'>
                  <li className='tab-lieu'>Lieu: {tab.name}</li>
                  <li className='tab-distance'>Distance (km): {tab.km}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
    )
}