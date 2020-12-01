import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function AddForm (props){
    const [titleInput, setTitleInput]= useState('')
    const [imgInput, setImgInput] =useState('')
    const [textInput, setTextInput]=useState('')

    return(
        <div>
            <input onChange={e=>setTitleInput(e.target.value)} placeholder='Card Title' value={titleInput}/>
            <input onChange={e=>setImgInput(e.target.value)} placeholder='Card IMG' value={imgInput}/>
            <input onChange={e=>setTextInput(e.target.value)} placeholder='Card TEXT' value={textInput}/>
            <Button onClick={()=>props.addCard({title:titleInput,img:imgInput,text:textInput})}>Submit</Button>
        </div>
    )
}