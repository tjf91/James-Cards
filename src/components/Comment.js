import React from 'react'
import { Button } from 'react-bootstrap'
import delBut from './imgs/delete-button-picture.png'
import editBut from  './imgs/pencil-190586_640.png'

export default function Comment (props){
    return(
        <div className="comment">
             Comment: {props.comment.text}
             <img className='del-button' src={editBut} alt='edit'/>
            <img className='del-button' src={delBut} alt='delete'/>
        </div>
    )
}