import React from 'react'

function Card() {

  const [msg, setMsg] = React.useState("click the button")
  const handler = () =>
    fetch("/.netlify/functions/node-fetch", { 
      headers: { 
        accept: "Accept: application/json" 
      } 
    })
    .then((x) => x.json())
    .then(({ msg }) => setMsg(msg))
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{msg}</p>
        <button onClick={handler}>Get a joke!</button>
      </header>
    </div>
  )
}

export default Card