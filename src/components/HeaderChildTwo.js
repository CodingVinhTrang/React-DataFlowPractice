import React from 'react'

function HeaderChildTwo(props) {

    

    return(
        <div className="container">
            <div className="row text-center text-warning">
                <h1>Header Child Two</h1>
                <button onClick={props.addArrayBGC2}>Add to BGCTwo</button>
            </div>

        </div>

    )
}

export default HeaderChildTwo;