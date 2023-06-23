import React, {useState} from 'react'

export default function Textform(props) {
    const handleuppercase=()=>
    {
        // console.log("Uppercasewasclicked");
        // setText("You have clicked on handleupclick ");
        setText(text.toUpperCase());
    }
    const handlelowercase=()=>
    {
        // console.log("Uppercasewasclicked");
        // setText("You have clicked on handleupclick ");
        setText(text.toLowerCase());
    }
    const handleclear=()=>
    {
        // console.log("Uppercasewasclicked");
        // setText("You have clicked on handleupclick ");
        let textnew="";
        setText(textnew);
    }
    const handleonChange=(event)=>
    {
        console.log("ONchange");
        // console.log(event);
        // console.log(event.target);
        console.log(event.target.value);
        setText(event.target.value);

        // setText("You have clicked on handleupclick ")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        // const voices = window.speechSynthesis.getVoices();
        // const femaleVoice = voices.find(voice => voice.voiceURI.includes('female'));
        // msg.voice = femaleVoice;
        msg.text = text;
        window.speechSynthesis.speak(msg);
      };
      const handleCopy = () =>{
        var text = document.getElementById('exampleFormControlInput1');
        text.select();
        navigator.clipboard.writeText(text.value);
      }
      const removeextraspaces = () =>
      {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
      }

      const [btntext,setbtntext]= useState("Button")

      const toggle = () =>
      {
        if(btntext ==='Button')
        {
            setbtntext("UnButton")
        } 
        else
        {
            setbtntext("Button")

        }
      }
      // Get the button element
    // const darkModeBtn = document.getElementById('dark-mode-btn');

    // // Add event listener to the button
    // darkModeBtn.addEventListener('click', () => {
    // // Toggle the dark mode class on the HTML element
    // document.documentElement.classList.toggle('dark-mode');
    // });
   
    // const[text,setText]= useState('Enter Text Here');
    const[text,setText]= useState('');

  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="Text" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div className="mb-3">
    {/* <label for="Text2" class="form-label">Example textarea</label> */}
    <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="4"></textarea>
    </div>
    <button className="btn btn-success" onClick={handleuppercase}>Convert to UpperCase</button>
    <button className="btn btn-info mx-2" onClick={handlelowercase}>Convert to LowerCase</button>
    <button className="btn btn-danger mx-2" onClick={handleclear}>Clear Text</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button className="btn btn-secondary mx" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-secondary mx-2" onClick={removeextraspaces}>Remove Extra Spaces</button>
    <button onClick={toggle} type="button" className='"btn btn-secondary mx-2'>{btntext}</button>
    {/* <button id="dark-mode-btn">Enable Dark Mode</button> */}


    <h3 className='mt-3'>Summary</h3>
    <p><i>{text.length}</i> & <i>{text.split(" ").length}</i></p>
    <h3>Preview &darr;</h3>
    <p>{text}</p>
    {/* <button className="btn btn-primary">Remove</button> */}
    
    </div>
  )
}
