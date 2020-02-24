import React from 'react'

export default function RenderPropsExample(props) {
    console.log(props.render())
    return (
        <div>
            {props.render("Snea Snake")}
            {props.renderTwo(false)}
        </div>
    )
}