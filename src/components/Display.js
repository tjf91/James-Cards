import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { api, apiCardId } from '../api'
import AddForm from './AddForm'
import CardDisplay from './CardDisplay'
import Sidebar from './Sidebar'



export default function Display (){
    const [cards,setCards] = useState([])
    const [toggleAdd, setToggleAdd] = useState(false)
    const [toggleSearch, setSearch] = useState(false)

    const addCard =(card)=>{
        axios
        .post(api,card)
        .then(res=>setCards(res.data))
        .then(setTimeout(()=>{
            console.log('alert?')
            
        return(
        <Alert variant="primary">Priceless knowledge shared with world</Alert>
        )},2000))
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
    const getAll = () => {
        axios
        .get(api+'/all')
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    }
    const getLast = () => {
        axios
        .get(api)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    }

    useEffect(()=>getLast(),[])

    

    return(
        <div className='display'>
            
            <Button id='get-all' onClick={()=>getAll()} >Get All</Button>
            
            <Button id='get-last' onClick={()=>getLast()} >Get Last</Button>
            <Button id='add-new' onClick={()=>{
                                                toggleAdd
                                                ?setToggleAdd(false)
                                                :setToggleAdd(true)
                                                setSearch(false)}} >Add New</Button>
            <Button id='search' onClick={()=>{
                                                toggleSearch
                                                ?setSearch(false)
                                                :setSearch(true)
                                                setToggleAdd(false)}} >Search</Button>
            {toggleAdd
            &&<AddForm
                addCard={addCard}                
                 />            
        } 
            {toggleSearch&&
            <Sidebar
                cards={cards}
                setCards={setCards} />}           
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