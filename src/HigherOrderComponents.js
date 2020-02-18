import React from 'react'

//Stems from the concept of higher order functions

//A function that takes a component as its first arugment and returns a new component that wraps the given component, 
//providing extra capabilities to it

export function withHOC(component) {
    const Component = component
    return function(props) {
        return (
            <Component {...props}/>
        )
    }
}

