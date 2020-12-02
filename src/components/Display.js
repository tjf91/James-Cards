import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api, apiCardId } from '../api'
import CardDisplay from './CardDisplay'
import Sidebar from './Sidebar'


export default function Display (){
    const [cards,setCards] = useState([])

    const addCard =(card)=>{
        axios
        .post(api,card)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    }
    const editCard = (card_id,card) => {
        axios
        .put(api+`/${card_id}`,card)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    }
    const deleteCard = (card_id) => {
        axios
        .delete(api+`/${card_id}`)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    }
    const addComment = (card_id,comment) => {
        
        axios
        .post(api+`/${card_id}/comments`,comment)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    }
    const editComment = (card_id,com_id,comment) =>{
        axios
        .put(api+`/${card_id}/comments/${com_id}`, comment)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    }
    const deleteComment = (card_id,com_id) => {
        axios
        .delete(api+`/${card_id}/comments/${com_id}`)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    }

    useEffect(()=>{
        axios
        .get(api)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    },[])
    return(
        <div className='display'>
            <Sidebar
                addCard={addCard}
                
                 />
            <CardDisplay
                cards={cards}
                editCard={editCard}
                deleteCard={deleteCard}
                addComment={addComment}
                editComment={editComment}
                deleteComment={deleteComment}
                 />
        </div>
    )
}