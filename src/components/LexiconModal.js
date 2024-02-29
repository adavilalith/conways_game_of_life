import { useState } from 'react';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';

function LexiconModal(props) {
  const [lexiconChoice,setLexiconChoice]=props.lexiconState
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-dark mx-5 my-3"     onClick={handleShow}>
            <img src="./images/info-icon.png" alt="" className='me-2 mb-2'/>
            <p className='h4 d-inline'>Lexicon</p>
      </button>

      <Modal show={show} onHide={handleClose}  centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title ><p className='h2'>Conway's Game of Life Lexicon</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Button onClick={()=>setLexiconChoice("hello")}>update lexicon</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LexiconModal;