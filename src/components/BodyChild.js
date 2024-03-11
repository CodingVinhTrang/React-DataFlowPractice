import React from 'react'
import BodyGrandChild from './BodyGrandChild';
import BodyGrandChildTwo from './BodyGrandChildTwo';

function BodyChild(props){
// console.log(props)
    return(
        <div className="container">
            <div className="row text-center text-info">
                <h1>Body Child</h1>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <BodyGrandChild pizza={props.number} add={props.add}/>
                </div>

                <div className="col-sm-6">
                    <BodyGrandChildTwo toggleWhoIam={props.toggleWhoIam} Iam={props.Iam} displayDataToBGC2={props.displayDataToBGC2}/>
                </div>
            </div>

        </div>
    )

}

export default BodyChild;