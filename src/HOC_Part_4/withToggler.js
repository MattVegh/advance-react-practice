import React from 'react'

export function withTogger(component) {
    
    return function(props) {
        return (
            <Toggler component={component} {...props} />
        )
    }
}