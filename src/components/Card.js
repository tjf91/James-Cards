import React, { useEffect, useState } from 'react'
import { Button} from 'react-bootstrap'
import {dateCreator,timeCreator} from '../utility/dateCreator'
import Comment from './Comment'
import DButton from './DButton'
import EButton from './EButton'
import GiphySearch from './GiphySearch'



export default function Card(props){
    
  
    const [imgInput, setImgInput] =useState('')
    const [commentInput, setCommentInput] = useState({
          text:'',
          time:timeCreator(),
          date:dateCreator(),
          img:'',
      })
    const [edit,setEdit] = useState(false)     
    const [viewComs, setView ] = useState(false)

    //Without this comments appear without gifs. 
    useEffect(() => {
        setCommentInput({...commentInput,img:imgInput})
       }, [imgInput]);

    const mappedComments = props.card.comments.map(comment=>{    
         
        return(            
            <Comment
                    comment={comment}
                    key={comment.com_id}
                    addComment={props.addComment}
                    editComment={props.editComment}
                    deleteComment={props.deleteComment}
                    card_id={props.card_id}
                    com_id={comment.com_id}
                    imgInput={imgInput}
                    setImgInput={setImgInput}/>
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
        <Button onClick={()=>viewComs?setView(false):setView(true)} id='comments-button' variant='info'>View Comments</Button>        
        <Button  onClick={()=>edit?setEdit(false):setEdit(true)} id='card-button' >Reply</Button>
        {
        edit&&
        <div className='reply-box'>
        <input onChange={e=>setCommentInput({...commentInput,text:e.target.value})}  className="comment-input" placeholder='valued opinion' value={commentInput.text} />
        <Button id='submit-reply' onClick={()=>{
            setCommentInput({...commentInput,img:imgInput})            
            setView(true)
            setEdit(false)
            props.addComment(props.card_id,commentInput)}}>Add 2 cents</Button>
        <img className='gifs' src={imgInput} alt='gif' />
        <div className='reply-gif'>
        <GiphySearch setImgInput={setImgInput} />
        </div>        
        </div>      
        } 
        <div id='card-comments'  >
        {viewComs?mappedComments:null}
        </div>
       </div>
        
    )
}