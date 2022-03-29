import axios from "axios"
const RANDOM_URL = `https://api.giphy.com/v1/gifs/random?api_key=H9UuXqI8PNXKpahI88ZcpQpNFafspVRe`
const TRENDING_URL =`https://api.giphy.com/v1/gifs/trending?api_key=H9UuXqI8PNXKpahI88ZcpQpNFafspVRe`
const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=H9UuXqI8PNXKpahI88ZcpQpNFafspVRe&limit=25&q=`

export function getRandom(){
   const response = axios.get(RANDOM_URL)
   return response 
}

export function getTrending(){
    const response1 = axios.get(TRENDING_URL)
    console.log(TRENDING_URL)
    return response1
}

export function getSearch(search){
    const response2 = axios.get(SEARCH_URL + search)
    console.log(SEARCH_URL + search)
    return response2
}