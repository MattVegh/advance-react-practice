import React from 'react'

export function withFavoriteNumber(component) {
    const Component = component
    return function(props) {
        return (
            <Component {...props} favoriteNumber={28} />
        )
    }
}