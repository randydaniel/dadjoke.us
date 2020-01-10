import React, { useEffect, useState } from 'react'
import Axios from 'axios';

function Card() {

  const [joke, setJoke] = useState("")
  const [fetch, setFetch] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general")
    //  console.log(result.data)
    setJoke(`${result.data[0].setup} ${result.data[0].punchline}`)
    }
    fetchData()
  }, [fetch])

  return (
    <div>
      <h1>{joke}</h1>
      <button onClick={() => setFetch(!fetch)}>Another One!</button>
    </div>
  );
}

export default Card