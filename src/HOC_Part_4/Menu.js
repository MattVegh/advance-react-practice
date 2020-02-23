import React from "react"
import {withToggler} from './withToggler'

function Menu(props) {
        return (
            <div>
                <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{display: props.on ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <p>Your Profile</p>
                    <p>Your Repositories</p>
                    <p>Your Stprs</p>
                    <p>Your Gists</p>
                </nav>
            </div>
        ) 
        }

export default withToggler(Menu, {defaultOnValue: true})