//composition over inheritance https://www.youtube.com/watch?v=wfMtDGfHWpA&feature=youtu.be

import React from 'react'

function ExampleComponentWithProps() {
    return (
        <div>
            <Navbar backgroundColor='firebrick' />
            <Button backgroundColor='blue' text='Click Here!' />
        </div>
    )
}

export default ExampleComponentWithProps