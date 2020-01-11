import React, { useState, useEffect } from 'react';
import './Card.scss';

import myVideo from '../assets/video/offerman.mp4';

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
      <video src={myVideo} type="video/mp4" autoPlay loop />
      <p>{joke}</p>
      <button onClick={() => setAnotherJoke(!anotherJoke)}>Show me another!</button>
    </div>
  )
}

export default Card