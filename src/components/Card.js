import React from 'react'
import { Button } from 'react-bootstrap'
import Comment from './Comment'

export default function Card(props){
    const mappedComments = props.card.comments.map(comment=>{
        return(
            <Comment
                    comment={comment}
                    key={comment.com_id} />
        )
        })
    
    return (
        <div className='cards'>
            <img className='card-img' src={props.card.img} alt =''/>
            <h2 id='card-title'>{props.card.title}</h2>
            <p id='card-text'>{props.card.text}</p>
            <Button id='comments-button' variant='info'>View Comments</Button>
            <Button id='card-button' >Reply</Button>
            <div id='card-comments'>{mappedComments}</div>
    
        </div>
    )
}