import React from 'react'
import './list.styles.css'

export const List = (props) => {
    const data = props

    return (
        <div className='list'>
            <ul>
                <li>
                    <p> {data.name} </p>
                </li>
            </ul>
        </div>
    )
}