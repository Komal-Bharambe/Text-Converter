import React, { useState } from 'react'

function Textfrom(props) {

    const[text, settext] = useState('')

    function handlechange(event){
        console.log("text entered")
        settext(event.target.value)
    }

    function handleclick(){
        console.log('button clicked'+ text)
        const newtext = text.toUpperCase();
        settext(newtext)
        props.showalert('Converted to uppercase','success')
    }

    function handleclick2(){
        const newtext = text.toLowerCase();
        settext(newtext)
        props.showalert('converted to lowercase', 'success')
    }

    function handleclick3(){
        const newtext = '';
        settext(newtext)
        props.showalert('text clear successfully', 'success')
    }

    function handleclick4(){
        const text = document.getElementById('floatingTextarea2');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert('Successfully copy to clipboard', 'success')
    }

    function handleclick5(){
        let newtext = text.split(/[ ] + /);
        settext(newtext.join(" "));
        props.showalert('Extra space removed succesfully', 'success')
    }

    return (
        <div>
            <div className="container" style={{ color: props.mode === 'dark'? 'white' : 'rgb(5 20 70)'}}>
            <h1>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here"  id="floatingTextarea2" value={text} onChange={handlechange} style={{height:'200px', backgroundColor: props.mode === 'light'? 'white' : 'rgb(5 20 70)', color: props.mode === 'dark'? 'white' : 'rgb(5 20 70)'}}></textarea>
                <button className='btn btn-primary mx-1' style={{marginTop: "20px"}} onClick={handleclick} >Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' style={{marginTop: "20px"}} onClick={handleclick2} >Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' style={{marginTop: "20px"}} onClick={handleclick3} >Clear Text</button>
                <button className='btn btn-primary mx-1' style={{marginTop: "20px"}} onClick={handleclick4} >Copy Text</button>
                <button className='btn btn-primary mx-1' style={{marginTop: "20px"}} onClick={handleclick5} >Remove Extra Space</button>

            </div>
            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark'? 'white' : 'rgb(5 20 70)'}}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} Words and {text.length} Character</p>

            <h2>Preview</h2>
            <p>
                {text}
            </p>
            </div>
        </div>
    )
}

export default Textfrom
