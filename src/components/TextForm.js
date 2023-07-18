// rfc is short form of react based function 
import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
  const upClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
    // document.title='TextUtils-Uppercase'
  }
  const loClick = () => {
  
    let newText = text.toLowerCase();
    setText(newText);
  }
  const ClClick = () => {
  
    let newText = ''
    setText(newText);
    

  }
   const Copy=()=>{
    navigator.clipboard.writeText(text);
    alert('text is copied')
   }


  const speak = () => {

    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const onChange = (event) => {
    // console.log('onChange');
    setText(event.target.value);
  }
  const [text, setText] = useState('');// state or usestate funtion is set the state of an object like mene abhi text nam se ek function banaya he or settext funtion mere liye text ko update karne ka kam karega
  

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea className='form-control' value={text} id="textbox" style={{background:props.mode==='dark'?'gray':'white' , color:props.mode==='dark'?'white':'black'}} rows="8" onChange={onChange}></textarea>
          {/* here value is equal to text(enter the text here) */}
        </div>
        <button className="btn btn-primary mx-3 " onClick={upClick}>Text to Uppercase</button>
        <button className='btn btn-primary mx-3 ' onClick={loClick}>Text to Lowercase</button>
        <button className='btn btn-primary mx-3 btn-danger' onClick={ClClick}>Clear Text</button>
        <button className='btn btn-primary mx-3 ' onClick={Copy}>Copy to Clipboard</button>
        <button className='btn btn-primary mx-3 btn-dark' onClick={speak}>Speak</button>
        {/* mx-2 bootstrap class to give margin in buttons */}
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.trim() === ''? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <h1 className='head2 my-2'>Time for reading</h1>
        <p>{0.008 * text.split().length} <strong>Reads in Minutes</strong></p>
        <h1 className='head3 my-2'>Preview</h1>
        <p>{text.length>0?text:'Type Something to Preview'}</p>
        
      </div>
    </>


  )
}
TextForm.propTypes = {
  title: PropTypes.string,
}


