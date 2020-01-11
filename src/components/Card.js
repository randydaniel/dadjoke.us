import React, { useState, useEffect } from 'react'

function Card() {

  const [joke, setJoke] = useState(true)
  const [anotherJoke, setAnotherJoke] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      fetch("/.netlify/functions/node-fetch")
      .then((x) => x.json())
      .then(({ joke }) => setJoke(joke))
    }
    fetchData()
  }, [anotherJoke])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{joke}</p>
        <button onClick={() => setAnotherJoke(!anotherJoke)}>Get a joke!</button>
      </header>
    </div>
  )
}

export default Card