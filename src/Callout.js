import React from 'react'

function Callout(props) {
    return (
        <div className='callout'>
            <h1>{props.header}</h1>
            <p>{props.body}</p>
        </div>
    )
}

export default Callout