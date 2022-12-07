import axios from "axios";
import React, { useState } from "react";

export default function KanyeQuoteView() {
  const [first, setfirst] = useState('')
  const [add, setAdd] = useState('')
  
  const getQuote = async() => {
    const data = await axios.get('https://api.kanye.rest')
    const quote = data.data.quote
    setfirst(quote)
  }

  const addQoute = () =>{
    setAdd(first)
    
  }


  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <h2>{first}</h2>

      <button onClick={getQuote} style={{marginRight:'20px'}}>Get Quote</button>
      <button onClick={addQoute} >Add Favorite</button>
      <h4 style={{}}>{add}</h4>
    </section>
  );
}
