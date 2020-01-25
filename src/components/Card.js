import React, { useState, useEffect } from 'react';
import './Card.scss';

import bars from '../assets/images/bars.svg';
import myVideo1 from '../assets/video/hallmark.mp4';
import myVideo2 from '../assets/video/joeybadass.mp4';
import myVideo3 from '../assets/video/offerman.mp4';

function Card() {

  const [joke, setJoke] = useState(true)
  const [anotherJoke, setAnotherJoke] = useState(false)
  const [loading, setLoading] = useState(true)
  const [video, setVideo] = useState(myVideo3)

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

  const randomVideo = () => {
    const ranNum = Math.floor(Math.random() * 3);
    const videoList = [myVideo1, myVideo2, myVideo3];
    return setVideo(videoList[ranNum])
  }
  
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
          <video src={video} type="video/mp4" autoPlay loop />
          <p>{joke}</p>
        </div>
      )}
      <button onClick={() => {randomVideo(); setAnotherJoke(!anotherJoke)}}>Show me another!</button>
    </div>
  )
}

export default Card