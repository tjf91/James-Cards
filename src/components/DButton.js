import React from 'react'
import delBut from './imgs/delete-button-picture.png'

export default function DButton (props){

    return(
                //delete button, initially wanted it to be a reusable component
             <div>                
                 <img onClick={()=>props.action(props.args)} className='del-button' src={delBut} alt='delete'/>
            </div>
            
    )
}