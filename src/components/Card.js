import React, { useState } from 'react'
import { Button} from 'react-bootstrap'
import Comment from './Comment'
import DButton from './DButton'
import EButton from './EButton'



export default function Card(props){
      const [edit,setEdit] = useState(false)
     

    const mappedComments = props.card.comments.map(comment=>{     
        return(            
            <Comment
                    comment={comment}
                    key={comment.com_id}
                    addComment={props.addComment}
                    editComment={props.editComment}
                    deleteComment={props.deleteComment}
                    card_id={props.card_id}
                    com_id={comment.com_id} />
        )
        })
        
    
             
    return (
        <div className='cards'>
        <div id='card-DEButtons' >
             <DButton                 
             action={props.deleteCard}
             args={props.card_id} />
             <EButton
             editCard={props.editCard}
             card_id={props.card_id}
             card={props.card} />                  
        </div>
       
        <img className='card-img' src={props.card.img} alt =''/>
        <h2 id='card-title'>{props.card.title}</h2>
        <p id='card-text'>{props.card.text}</p>
        <Button id='comments-button' variant='info'>View Comments</Button>
        <input className="comment-input" placeholder='valued opinion' />
        <Button onClick={()=>setEdit(true)} id='card-button' >Reply</Button>
        
        
        <div id='card-comments'>{mappedComments}</div>

       </div>
        
    )
}