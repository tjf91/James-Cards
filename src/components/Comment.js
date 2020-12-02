import React, { useState } from 'react'
import delBut from './imgs/delete-button-picture.png'
import editBut from  './imgs/pencil-190586_640.png'
import { Button } from 'react-bootstrap'
import  { dateCreator,timeCreator } from '../utility/dateCreator'


export default function Comment (props){
    const [commentInput, setCommentInput] = useState({
            text:'',
            time:timeCreator(),
            date:dateCreator(),
        })
    const [edit, setEdit] =useState(false)
    const handleEdit = () =>{
        setEdit(true)
    }
    const handleEditSubmit=()=>{        
        props.editComment(props.card_id,props.com_id,commentInput)
        setEdit(false)
    }


    return(
        <div className="comment">
            <img onClick={()=>props.deleteComment(props.card_id,props.com_id)} className='del-button' src={delBut} alt='' />
            <img onClick={()=>handleEdit()} className='del-button' src={editBut} alt='' />
            <div className="comment-dt">{ props.comment.time}<br/>{ props.comment.date}</div>
            {edit&&
            <div className='edit-div'>
                <textarea className='com-edit-input' onChange={e=>setCommentInput({...commentInput,text:e.target.value})} placeholder='take backs' >{props.comment.text}</textarea>
                <Button id="edit-button" variant='primary' onClick={()=>handleEditSubmit()}>Submit</Button>
            </div>
                }
            {
            !edit&&
            props.comment.text}
        </div>
    )
}