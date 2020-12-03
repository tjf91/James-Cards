import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import GiphySearch from './GiphySearch'

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
            alert("At least throw an image in there")
        }                 
       
        
    }

    return(
        <div  className='sidebar'>
            <input onChange={e=>setTitleInput(e.target.value)} placeholder='Card Title' value={titleInput}/>
            <input onChange={e=>setImgInput(e.target.value)} placeholder='Card IMG' value={imgInput} accept="https:/*"/>
            <input onChange={e=>setTextInput(e.target.value)} placeholder='Card TEXT' value={textInput}/>
            <Button onClick={()=>handleAdd()}>Submit</Button>            
             <GiphySearch
              imgInput={imgInput}
              setImgInput={setImgInput}/>
             <div>
                {mappedGifs}
             </div>
        </div>
    )
}