import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { api } from '../api'
import AddForm from './AddForm'
import CardDisplay from './CardDisplay'
import Sidebar from './Sidebar'
import { toast } from 'react-toastify';


toast.configure()
export default function Display (){
    const [cards,setCards] = useState([])
    const [toggleAdd, setToggleAdd] = useState(false)
    const [toggleSearch, setSearch] = useState(false)

    const notify = () => {
        console.log('toast')
        toast("Wow so easy !")};


    const addCard =(card)=>{
        axios
        .post(api,card)
        .then(res=>setCards(res.data)) 
        .then(()=>toast('Card Added'))                 
        .catch(e=>console.log(e))
    }
    const editCard = (card_id,card) => {
        axios
        .put(api+`/${card_id}`,card)
        .then(res=>setCards(res.data))
        .then(()=>toast('Card Edited'))
        .catch(e=>console.log(e))
    }
    const deleteCard = (card_id) => {
        axios
        .delete(api+`/${card_id}`)
        .then(res=>setCards(res.data))
        .then(()=>toast('Card Deleted'))
        .catch(e=>console.log(e))
    }
    const addComment = (card_id,comment) => {
        
        axios
        .post(api+`/${card_id}/comments`,comment)
        .then(res=>setCards(res.data))
        .then(()=>toast('Comment Added'))
        .catch(e=>console.log(e))
    }
    const editComment = (card_id,com_id,comment) =>{
        axios
        .put(api+`/${card_id}/comments/${com_id}`, comment)
        .then(res=>setCards(res.data))
        .then(()=>toast('Comment Edited'))
        .catch(e=>console.log(e))
    }
    const deleteComment = (card_id,com_id) => {
        axios
        .delete(api+`/${card_id}/comments/${com_id}`)
        .then(res=>setCards(res.data))
        .then(()=>toast('Comment Deleted'))
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