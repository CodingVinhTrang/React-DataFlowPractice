import React from 'react'

function BodyGrandChildTwo(props){
    // console.log(props)

    const listdisplayDataToBGC2 = props.displayDataToBGC2.map
    ((currentItem) => {
        return <h3>{currentItem}</h3>
    })

    return(
        <div className="container">
            <div className="row">
                <h1 type="button" onClick={() => props.toggleWhoIam()}>Body Grand Child Two</h1>
                {listdisplayDataToBGC2}
            </div>

        </div>
    )

}

export default BodyGrandChildTwo;