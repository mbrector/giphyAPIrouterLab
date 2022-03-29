import {useState} from 'react'
import { getSearch } from '../services/getRequests'

function Search() {
    const [searchGif, setSearchGif] = useState([])

    function searchGiphy() {
        const searchBox = document.getElementById('searchbox').value
        getSearch(searchBox)
        .then(res => setSearchGif(res.data.data))
    }
    
  return (
    <div>
        <input id='searchbox' defaultValue={'search'} />
        <button onClick={() => {searchGiphy()}}>Search</button>
        <div>
            {
                searchGif.map((gif,i) => {
                    return(
                        <img src = {gif.images.downsized_large.url} key = {i} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Search