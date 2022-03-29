import {getRandom} from "../services/getRequests"
import {useState, useEffect} from 'react'

function Home() {
    const [randomGif, setRandomGif] = useState([])

    useEffect(()=>{
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    },[])

    function rando() {
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }

    console.log(randomGif)

  return (
    <div>
        <img src={randomGif} onClick={() => { rando() }}/>
        <p>Click GIF for new Random GIF</p>
    </div>
  )
}

export default Home