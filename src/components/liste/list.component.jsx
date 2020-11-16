import React from 'react'
import './list.styles.css'

export const List = (props) => {
    const data = props

    return (
        <div className='list'>
            <ul>
                {data.places.map((value, index) => <li key={index}> {value} </li> )}
                -
                {data.distances.map((value, index) => <li key={index}> {value} </li> )}
            </ul>
        </div>
    )
}