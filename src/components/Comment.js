import React from 'react'
import delBut from './imgs/delete-button-picture.png'
import editBut from  './imgs/pencil-190586_640.png'
import EButton from './EButton'


export default function Comment (props){
    
    return(
        <div className="comment">
            <img onClick={()=>props.deleteComment(props.card_id,props.com_id)} className='del-button' src={delBut} alt='' />
            <img className='del-button' src={editBut} alt='' />
            {}
            Comment: {props.comment.text}
        </div>
    )
}