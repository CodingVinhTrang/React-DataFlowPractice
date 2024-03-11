import React from 'react'

function HeaderChild(props) {
console.log(props)
console.log(props.toggle)
    return(
        <div className="container">
            <div className="row text-center text-warning">
                <h1>Header Child</h1>
                <h3>{props.toggle && props.Iam}</h3>
                {/* other options to write */}
                {/* {props.toggle ? "I am me": ""}
                {props.toggle ? <p>I am me</p>: ""} */}
            </div>

        </div>

    )
}

export default HeaderChild;