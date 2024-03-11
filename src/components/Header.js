import React from 'react'
import HeaderChild from './HeaderChild';
import HeaderChildTwo from './HeaderChildTwo';

function Header(props) {
console.log(props)
    return(
        <div className="container">
                <div className="row text-center text-success">
                    <h1>Header</h1>
                </div>

            <div className="row">
                <div className="col-sm-6">
                    <HeaderChild Iam = {props.Iam} toggle={props.toggle} />
                </div>

                <div className="col-sm-6">
                    <HeaderChildTwo addArrayBGC2={props.addArrayBGC2}/>
                </div>
                
            </div>

        </div>

    )
}

export default Header;