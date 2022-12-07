import React, { useState } from "react";

export default function PersonalQuoteView() {
  const [first, setfirst] = useState('')
  const [value, setValue] = useState('')

  const handleCanghe = (e) => {
    setfirst(e.target.value)
  }

  const addQoute = () => {
     setValue(first)
  }
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    } catch (error) {  
    } 
  };


  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={(e) => handleSubmit(e)} >
        <input
        type="text"
        name="quote"
        onChange={handleCanghe}
        // value={}

        />
        <button
        type="Submit"
          // type={}
          onClick={addQoute}
        >
          Submit
        </button>
      </form>
      <p>{value}</p>
    </section>
  );
}
