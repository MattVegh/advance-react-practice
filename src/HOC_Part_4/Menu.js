import React from "react"
import useToggler from '../useToggler'

function Menu() {

    const [ isShowing, toggle ] = useToggler(true)
    return (
        
            <div>
                <button onClick={toggle}>{isShowing ? "Hide" : "Show"} Menu </button>
                <nav style={{ display: isShowing ? "block" : "none" }}>
                    <h6>Signed in as Coder123</h6>
                    <p>Your Profile</p>
                    <p>Your Repositories</p>
                    <p>Your Stprs</p>
                    <p>Your Gists</p>
                </nav>
            </div>

    )
}

export default Menu