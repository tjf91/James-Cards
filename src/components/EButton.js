import React, {useEffect, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import GiphySearch from './GiphySearch';
import editBut from  './imgs/pencil-190586_640.png'



export default function EButton (props){
        const [show, setShow] = useState(false);

        
        const handleShow = () => setShow(true);

        const [titleInput, setTitleInput]= useState(props.card.title)
        const [imgInput, setImgInput] =useState(props.card.img)
        const [textInput, setTextInput]=useState(props.card.text)

        const card={
            title:titleInput,
            img:imgInput,
            text:textInput,
        }

        const handleClose = () => {            
            setShow(false);
        }
        const handleCloseSave = () => {
            props.editCard(props.card_id,card)
            setShow(false);
        }
       
        
      
        return (
          <>            
            <img className='del-button' src={editBut} onClick={handleShow}  alt=''/>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit your Card</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <input onChange={e=>setTitleInput(e.target.value)} placeholder='Card Title' value={titleInput}/>
              <textarea className="edit-textarea" onChange={e=>setTextInput(e.target.value)} >{textInput}</textarea>
              <input onChange={e=>setImgInput(e.target.value)} placeholder='Card IMG' value={imgInput}/>
              <img className='gifs' src={imgInput} alt='gif' />
                   
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleCloseSave}>
                  Save Changes
                </Button>
                <GiphySearch 
                imgInput={imgInput}
                setImgInput={setImgInput}/>
              </Modal.Footer>
            </Modal>
          </>
        );
            
    
}