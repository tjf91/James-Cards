import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../api'
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

    useEffect(()=>{
        axios
        .get(api)
        .then(res=>setCards(res.data))
        .catch(e=>console.log(e))
    },[])
    return(
        <div className='display'>
            <Sidebar
                addCard={addCard} />
            <CardDisplay
                cards={cards} />
        </div>
    )
}