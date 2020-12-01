import React from 'react'
import Button from 'react-bootstrap/Button';
import AddForm from './AddForm';

export default function Sidebar (props){
    return(
        <div className='sidebar'>
            <div>Search</div>
            <Button>Add New</Button>
            <AddForm
                    addCard={props.addCard} />
        </div>
    )
}