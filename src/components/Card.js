import React, { useState, useEffect } from 'react';
import './Card.scss';

import bars from '../assets/images/bars.svg';
import myVideo from '../assets/video/offerman.mp4';

function Card() {

  const [joke, setJoke] = useState(true)
  const [anotherJoke, setAnotherJoke] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      fetch("/.netlify/functions/node-fetch")
      .then((x) => x.json())
      .then(({ joke }) => setJoke(joke))
      setLoading(false)
    }
    fetchData()
  }, [anotherJoke])
  
  return (
    <div className="Card">
      {loading ? (
        <div className="cardContent">
          <img
            src={bars}
            alt="loader"
          />
        </div>
      ) : (
        <div className="cardContent">
          <video src={myVideo} type="video/mp4" autoPlay loop />
          <p>{joke}</p>
        </div>
      )}
      <button onClick={() => setAnotherJoke(!anotherJoke)}>Show me another!</button>
    </div>
  )
}

export default Card