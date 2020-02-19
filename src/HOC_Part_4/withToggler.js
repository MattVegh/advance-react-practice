import React, { Component } from 'react'


class Toggler extends Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }

    render() {
        const C = this.props.component
        return (
            <C 
            on={this.state.on} 
            toggle={this.toggle}
            {...this.props} 
            />
        )
    }
}
export function withToggler(component) {
    
    return function(props) {
        return (
            <Toggler component={component} {...props} />
        )
    }
}