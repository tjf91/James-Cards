import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { api } from '../api';
import AddForm from './AddForm';

export default function Sidebar (props){
    const [searchInput,setSearchInput] = useState('')
    const search = (input) => {
        axios
        .get(api+`/filter?q=${input}`)
        .then(res=>props.setCards(res.data))
        .catch(e=>console.log(e))
    }
    

    return(
        <div className='sidebar'>
            <div>Search</div>                   
            <input placeholder='filter posts' />
             <Button>Search</Button>
        </div>
    )
}