import React from 'react'

export function withExtraPropHOC(component) {
    const Component = component
    return function(props) {
        return (
            <Component anotherProp='blah' {...props}/>
        )
    }
}
