import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import UseEffect from './components/UseEffect';


function App(){

    //Button in BGC, Display number in BCTwo
    const [counter, setCounter] = React.useState(0);

    function handleClickAdd() {
        setCounter(prevCount => prevCount +1)
    }
    
    //Button text click in BGCTwo, Display name in HC
    const [Iam, setIam] = React.useState("I am me")

    const [toggle, setToggle] = React.useState(false)
    // console.log(Iam)
    // console.log(toggle)
    
    function toggleWhoIam(){
        setToggle(toggle => !toggle)
    }
    
    //Button in HCTwo, Display add array in BGCTwo
    const [dataToBGC2, setDataToBGC2] = React.useState([])

    function addArrayBGC2(){
        setDataToBGC2(prevDataToBGC2 => [...prevDataToBGC2, `Child ${prevDataToBGC2.length + 1}`])

    }
    console.log(dataToBGC2)
    return (
        <div className="container">

            <div className="row text-center text-primary">
                <h1>Hi DataFlow! I'm App.js The Master Parent</h1>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <Header Iam={Iam} toggle={toggle} addArrayBGC2={addArrayBGC2}/>
                </div>

                <div className="col-sm-4">
                    <Body number={counter} add={handleClickAdd} toggleWhoIam = {toggleWhoIam} displayDataToBGC2={dataToBGC2} />
                </div>

                <div className="col-sm-4">
                    <UseEffect />
                </div>

            </div>

        </div>

    )
}

export default App;