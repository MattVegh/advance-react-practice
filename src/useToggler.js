import {useState} from "react"

function useToggler(defaultOnValue) {
    const [ isToggledOn, setIsToggledOn ] = useState(defaultOnValue)

    function toggle() {
        setIsToggledOn(prev => !prev)
    }

    return [ isToggledOn, toggle ]
}

export default useToggler