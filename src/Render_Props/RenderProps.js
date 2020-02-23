import React from 'react'

export default function RenderPropsExample(props) {
    console.log(props.name())
    return (
        <div>
            <h1>Hi {props.name}</h1>
        </div>
    )
}