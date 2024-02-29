import { useState } from 'react';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';

function FunStuffModal(props) {
  const [lexiconChoice,setLexiconChoice]=props.lexiconState
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const funStuff = [{name:"Glider Gun",pattern:[
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
                                                  [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                 ]},
                         {name:'A small explosive v shape',pattern:[[1,1,0,0],[0,0,1,0],[0,0,0,1],[0,0,1,0],[1,1,0,0]]},
                         {name:'heart pattern',pattern:[[0,1,1,0,1,1,0],[1,1,0,1,0,1,1],[0,1,0,0,0,1,0],[0,0,1,0,1,0,0],[0,0,0,1,0,0,0]]}
                        ] 
    const selectLexiconChoice = (pattern)=>{
        setLexiconChoice(pattern)
        handleClose()
    }
  return (
    <>
      <button className="btn btn-success  mx-5 my-3"     onClick={handleShow}>
            <p className='h4 d-inline'>Fun Stuff</p>
      </button>

      <Modal show={show} onHide={handleClose}  centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title ><p className='h2'>Some Stuff I personally found fun to look at</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
                {funStuff.map((choice)=>{
                    return (
                        <Row className='my-4'>
                        <Col className='d-flex justify-content-center align-item-center'>
                            <p>{choice.name}</p>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center flex-column'>
                            <img src={`./images/lexiconImages/${choice.name}.png`} alt="" onClick={()=>selectLexiconChoice(choice.pattern)}  style={{maxWidth:'70%'}}/>
                            <Button className='my-2 btn-dark'onClick={()=>selectLexiconChoice(choice.pattern)}>use</Button>
                        </Col>
                        </Row>
                    )
                })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FunStuffModal;
