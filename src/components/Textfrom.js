import React, {useState} from 'react'

 

export default function Textfrom(props) {

    const handleUpClick = ()=>{
        //console.log("Upper Case was Clicked " + text);
        let newText = text.toUpperCase ();
        setText(newText);
    }
    const handleLoClick = ()=>{
        //console.log("Upper Case was Clicked " + text);
        let newText = text.toLowerCase ();
        setText(newText);
    } 
    const handleClearClick = ()=>{
        //console.log("Upper Case was Clicked " + text);
        let newText = "     ";
        setText(newText);
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy =() =>{
        var text = document.getElementById("myBox1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const [text, setText] = useState("");
    //setText('Hello ');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark  '?'white':'black' }}>
                <h1 >{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark  '?'grey':'white' }} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 " onClick={handleUpClick}> Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={ handleLoClick}> Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={ handleClearClick}> Clear Text </button>
                <button className="btn btn-primary mx-2 myBox1" onClick={ handleCopy}> Copy Text </button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark  '?'white':'black' }}> 
                <h1> You Text Summary</h1>  
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p> {0.008* text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{ text.length>0?text:"Enter something in the text box above  privew it here"}</p>
            </div>   

        </> 
    )
}
