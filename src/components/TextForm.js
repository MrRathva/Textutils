import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success");
  };

  const handleLoclick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Successfully!", "Converted To Lowercase");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert( "Cler Text","success");
  };

  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully!", "Clear Extra Space ");
  };

  const handleonchange = (event) => {
    // console.log("uppercase ")
    setText(event.target.value);
    props.showAlert("Successfully!", "Copy Text");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container mt-5"  style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <div className="mb-5">
          <label htmlFor="mybox" className="form-label">
            Some Text Are Here
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{background: props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'#042743'}}
            id="mybox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your Text is Here</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <p>Preview</p>
        <h4>{text.length > 0 ? text : "Enter Somthing"}</h4>
      </div>
    </>
  );
}
