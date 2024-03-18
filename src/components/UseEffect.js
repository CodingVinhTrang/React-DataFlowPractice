import React from "react";

function UseEffect(){
    // const [dndData, setdndData] = React.useState()

    // //we are pulling data from External Source (API) so we need to use the 'useEffect Hook
    // //useEffect has Two parameters.
    // //First one is Required.
    // //Second is optional
    // React.useEffect(()=>{
    //     console.log("Effect Ran")
    //     fetch(`https://www.dnd5eapi.co/api/features`)
    //     .then(res => res.json())
    //     .then(data => setdndData(data))
    // },[])

    // console.log(dndData)

    const [userInput, setUserInput] = React.useState({})
    
    
    console.log(userInput)

    function changeNumber(event){
        event.preventDefault()

        setUserInput(prevUserInput => userInput)
        console.log("changenumber ran")
    
        React.useEffect(() => {
            console.log("Effect ChangeNumber Ran")
            fetch(`https://api.isevenapi.xyz/api/iseven/${userInput}`)
            .then(res => res.json())
            .then(data => setUserInput(data))
        },[userInput])

    }
    

    return(
        <div className="container">
            <div className="row">
                <form onSubmit ={changeNumber}>
                    <h1>Hello UseEffect</h1>

                    <input type="text" name="" id="" ></input>
                    <button>Submit</button>
                    <h3>{"response"}</h3>
                </form>
            </div>
        </div>
    )
}

export default UseEffect