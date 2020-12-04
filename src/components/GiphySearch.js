import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function GiphySearch (props){
    const [gifInput, setGifInput]=useState('')
    const [gifs,setGifs]= useState([])
    const giphyKey='FFC6KjDhiM88JkkhsrFX1hoiSAAMVPO0'
    
    const searchGifs = (input) => {
        axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${input}&limit=${10}`)
        .then(res=>setGifs(res.data.data.map(gif=>gif.images.original.url)))
        .catch(e=>console.log(e))
    }
   
    //The onClick function sets empty prop via a setState hook to the img string
    const mappedGifs = gifs.map(gif=>{
        return(                            
               <img onClick={()=>props.setImgInput(gif)} className="gifs" src={gif} alt='' />                        
        )
    })
    return(
        <div>
            <input onChange={e=>setGifInput(e.target.value)} placeholder="search for stuff" value={gifInput}/>
             <Button id='giphy-search' onClick={()=>searchGifs(gifInput)}>GIPHY Search</Button>
             {mappedGifs}
        </div>
        
    )
}