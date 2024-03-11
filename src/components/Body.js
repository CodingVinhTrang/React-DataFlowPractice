import React from 'react'
import BodyChild from './BodyChild';
import BodyChildTwo from './BodyChildTwo';

function Body({number,add, toggleWhoIam, Iam, displayDataToBGC2}){
    //This is destructuring the data
    //Literally same way as PROPS

    return(
        <div className="container">
            <div className="row text-center text-success">
                <h1>Body</h1>
                {/* <h3>{number}</h3> */}
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <BodyChild number={number} add={add} toggleWhoIam={toggleWhoIam} Iam={Iam} displayDataToBGC2={displayDataToBGC2}/>
                </div>

                <div className="col-sm-6">
                    <BodyChildTwo number={number}/>
                </div>
            </div>

        </div>
    )

}

export default Body;