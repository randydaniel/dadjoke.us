import React, { useState, useEffect } from 'react';
import './Card.scss';

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
    <div className="Card">
      <p>{joke}</p>
      <button onClick={() => setAnotherJoke(!anotherJoke)}>Get a joke!</button>
    </div>
  )
}

export default Card