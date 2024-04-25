import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [wordCounts, setWordCounts] = useState(250);
  const [counTwitter, setTwitter] = useState(280);
  const [countGoogle, setcountGoogle] = useState(300);
  const handleCountChange = (e) => {
    const currentValue = e.target.value;
    setCharacterCount(currentValue.length);

    const words = currentValue.split(/\s+/).filter((word) => word.length !== 0);

    setWordCount(words.length);

    setWordCounts(currentValue.length > 0 && wordCounts - 1);
    setTwitter(currentValue.length > 0 && counTwitter - 1);
    setcountGoogle(currentValue.length > 0 && countGoogle - 1);
  };
  return (
    <div>
      <div className="row">
        <div className="header">
          <h3>word counter</h3>
          <p className="grammar">Grammar check</p>
        </div>
      </div>
      <div className="row">
        <div class="box">
          <h4>word</h4>
          <p>{wordCount}</p>
        </div>
        <div className="box">
          <h4>Character</h4>
          <p>{characterCount}</p>
        </div>
        <div className="box">
          <h4>facebook</h4>
          <p className="plan-price">
            {wordCounts}
            <span>/250</span>
          </p>
        </div>
        <div className="box">
          <h4>twitter</h4>
          <p className="plan-price">
            {counTwitter}
            <span>/280</span>
          </p>
        </div>
        <div className="box">
          <h4>google</h4>
          <p className="plan-price">
            {countGoogle}
            <span>/300</span>
          </p>
        </div>
      </div>
      <form className="contact-form" method="post" action="#">
        <div class="row">
          <textarea
            cols="30"
            placeholder="Type or paste your text"
            name="text"
            onChange={handleCountChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default App;
