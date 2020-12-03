import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export default function AddForm (props){
    const [titleInput, setTitleInput]= useState('')
    const [imgInput, setImgInput] =useState('')
    const [textInput, setTextInput]=useState('')

    const [gifInput,setGifInput] = useState('')
    const [imgGif,setImgGif] = useState('')
    const [gifs,setGifs]= useState([])

    const giphyKey='FFC6KjDhiM88JkkhsrFX1hoiSAAMVPO0'


    const searchGifs = (input) => {
        axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${input}&limit=${10}`)
        .then(res=>setGifs(res.data.data.map(gif=>gif.images.original.url)))
        .catch(e=>console.log(e))
    }
    
    const mappedGifs = gifs.map(gif=>{
        return(                            
               <img onClick={()=>setImgGif(gif)} className="gifs" src={gif} alt='' />                        
        )
    })
    
    
    useEffect(()=>{setImgInput(imgGif)},[imgGif])
    const handleAdd=()=>{
        if(imgInput){
            props.addCard({title:titleInput,img:imgInput,text:textInput})
            setTitleInput('')
            setImgInput('')
            setTextInput('')
            setGifInput('')
        }
        else{
            prompt("ey")
        }                 
       
        
    }

    return(
        <div  className='sidebar'>
            <input onChange={e=>setTitleInput(e.target.value)} placeholder='Card Title' value={titleInput}/>
            <input onChange={e=>setImgInput(e.target.value)} placeholder='Card IMG' value={imgInput}/>
            <input onChange={e=>setTextInput(e.target.value)} placeholder='Card TEXT' value={textInput}/>
            <Button onClick={()=>handleAdd()}>Submit</Button>
            <input onChange={e=>setGifInput(e.target.value)} placeholder="search for stuff" value={gifInput}/>
             <Button onClick={()=>searchGifs(gifInput)}>Search Gifs</Button>
             <div>
                {mappedGifs}
             </div>
        </div>
    )
}