import {useState, useEffect} from 'react'
import { getTrending } from '../services/getRequests'

function Trending() {
    const [trendingGif, setTrendingGif] = useState([])

    useEffect(()=>{
        getTrending()
        .then(res => setTrendingGif(res.data.data))
    },[])

  return (
    <div>
        {
            trendingGif.map((gif, i) => {
                return(
                     <img src = {gif.images.downsized_large.url} key = {i}/>
                )
            })
        }
    </div>
  )
}

export default Trending