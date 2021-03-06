import React, { useEffect, useState } from 'react'
import delBut from './imgs/delete-button-picture.png'
import editBut from  './imgs/pencil-190586_640.png'
import { Button } from 'react-bootstrap'
import  { dateCreator,timeCreator } from '../utility/dateCreator'
import GiphySearch from './GiphySearch'


export default function Comment (props){
    //Create comment in the editing state
    const [imgInput,setImgInput] =useState(props.comment.img)
    const [commentInput, setCommentInput] = useState({
            text:'',
            time:timeCreator(),
            date:dateCreator(),
            img:'',
        })

    const [edit, setEdit] =useState(false)
    //Toggle edit button function
    const handleEdit = () =>{
        edit?setEdit(false):setEdit(true)
    }
    //Submit edit
    const handleEditSubmit=()=>{        
        props.editComment(props.card_id,props.com_id,commentInput)
        setEdit(false)
    }
    //make sure image state changes after it is clicked on
    useEffect(()=>{
        setCommentInput({...commentInput,img:imgInput})
    },[imgInput])
    
    return(
        <div className="comment">
            <img onClick={()=>props.deleteComment(props.card_id,props.com_id)} className='del-button' src={delBut} alt='' />
            <img onClick={()=>handleEdit()} className='ed-button' src={editBut} alt='' />
            <div className="comment-dt">{ props.comment.time}<br/>{ props.comment.date}</div>
            <img className='gifs' src={imgInput} alt='gif' />
            {edit?
            <div className='edit-div'>
                <textarea className='com-edit-input' onChange={e=>setCommentInput({...commentInput,text:e.target.value})} placeholder='take backs' >{props.comment.text}</textarea>
                <Button id="edit-button" variant='primary' onClick={()=>handleEditSubmit()}>Submit</Button>
                <GiphySearch
                setImgInput={setImgInput} />
            </div>
            :
            <div className='com-edit-input' id='comment-text'>
                {props.comment.text}
            </div >}         
              
              
               
               
        </div>
    )
}