import {useState} from "react"

function useToggler() {
    const [ isToggledOn, setIsToggledOn ] = useState(false)

    function toggle() {
        setIsToggledOn(!isToggledOn)
    }

    return { isToggledOn, toggle }
}

export default useToggler