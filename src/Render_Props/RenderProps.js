import React from 'react'

export default function RenderPropsExample(props) {
    console.log(props.name())
    return (
        <div>
            {props.name()}
        </div>
    )
}