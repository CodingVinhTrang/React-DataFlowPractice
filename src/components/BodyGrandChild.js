import React from 'react'

function BodyGrandChild({pizza,add}){

    return(
        <div className="container">
            <div className="row">
                <h1>Body Grand Child</h1>
                {/* <h3>{pizza}</h3> */}
                <button onClick={()=>add(add)}>Add</button>
            </div>

        </div>
    )

}

export default BodyGrandChild;