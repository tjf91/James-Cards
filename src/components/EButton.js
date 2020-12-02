import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import editBut from  './imgs/pencil-190586_640.png'



export default function EButton (props){
const [show, setShow] = useState(false);

        
        const handleShow = () => setShow(true);

        const [titleInput, setTitleInput]= useState('')
        const [imgInput, setImgInput] =useState('')
        const [textInput, setTextInput]=useState('')
        const card={
            title:titleInput,
            img:imgInput,
            text:textInput,
        }

        const handleClose = () => {
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
              <input onChange={e=>setImgInput(e.target.value)} placeholder='Card IMG' value={imgInput}/>
              <input onChange={e=>setTextInput(e.target.value)} placeholder='Card TEXT' value={textInput}/>
                   
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
            
    
}