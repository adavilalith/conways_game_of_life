import { useState } from 'react';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';

function LexiconModal(props) {
  const [lexiconChoice,setLexiconChoice]=props.lexiconState
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const stillLife = [{name:"Block",pattern:[[1,1],[1,1]]},
                       {name:"Bee-Hive",pattern:[[0,1,1,0],[1,0,0,1],[0,1,1,0]]},
                       {name:"Loaf",pattern:[[0,1,1,0],[1,0,0,1],[0,1,0,1],[0,0,1,0]]},
                       {name:"Boat",pattern:[[1,1,0,0],[1,0,1,0],[0,1,0,0]]},
                       {name:"Tub",pattern:[[0,1,0],[1,0,1],[0,1,0]]},
                       {name:"Air-Craft",pattern:[[1,1,0,0],[1,0,0,1],[0,0,1,1]]},
                      ]
    const oscillators = [{name:"Blinker",pattern:[[0,1,0],[0,1,0],[0,1,0]]},
                         {name:"Toad",pattern:[[0,0,1,0],[1,0,0,1],[1,0,0,1],[0,1,0,0]]},
                         {name:"Beacon",pattern:[[1,1,0,0],[1,0,0,0],[0,0,0,1],[0,0,1,1],]},
                         {name:"None",pattern:[[]]},
                         {name:"None",pattern:[[]]},
                        ]
    const spaceships = [{name:"None",pattern:[[]]},
                        {name:"None",pattern:[[]]},
                        {name:"None",pattern:[[]]},
                        {name:"None",pattern:[[]]},
                        {name:"None",pattern:[[]]},
                        ] 
    const selectLexiconChoice = (pattern)=>{
        setLexiconChoice(pattern)
        handleClose()
    }
  return (
    <>
      <button className="btn btn-primary  mx-5 my-3"     onClick={handleShow}>
            <img src="./images/info-icon.png" alt="" className='me-2 mb-2'/>
            <p className='h4 d-inline'>Lexicon</p>
      </button>

      <Modal show={show} onHide={handleClose}  centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title ><p className='h2'>Conway's Game of Life Lexicon</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start ms-5"><p className='h3'>Still Life:</p></Col>
                </Row>
                {stillLife.map((choice)=>{
                    return (
                        <Row className='my-4'>
                        <Col className='d-flex justify-content-center'>
                            <p>{choice.name}</p>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center flex-column'>
                            <img src={`./images/lexiconImages/${choice.name}.png`} alt="" onClick={()=>selectLexiconChoice(choice.pattern)}/>
                            <Button className='my-2 btn-dark'onClick={()=>selectLexiconChoice(choice.pattern)}>use</Button>
                        </Col>
                        </Row>
                    )
                })}
                <Row>
                    <Col className="d-flex justify-content-start ms-5"><p className='h3'>Oscillators:</p></Col>
                </Row>
                {oscillators.map((choice)=>{
                    return (
                        <Row className='my-4'>
                        <Col className='d-flex justify-content-center'>
                            <p>{choice.name}</p>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center flex-column'>
                            <img src={`./images/lexiconImages/${choice.name}.png`} alt="" onClick={()=>selectLexiconChoice(choice.pattern)}/>
                            <Button className='my-2 btn-dark'onClick={()=>selectLexiconChoice(choice.pattern)}>use</Button>
                        </Col>
                        </Row>
                    )
                })}
                <Row>
                    <Col className="d-flex justify-content-start ms-5"><p className='h3'>Spaceships:</p></Col>
                </Row>
                {spaceships.map((choice)=>{
                    return (
                        <Row className='my-4'>
                        <Col className='d-flex justify-content-center '>
                            <p>{choice.name}</p>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center flex-column'>
                            <img src={`./images/lexiconImages/${choice.name}.png`} alt="" onClick={()=>selectLexiconChoice(choice.pattern)}/>
                            <Button className='my-2 btn-dark'onClick={()=>selectLexiconChoice(choice.pattern)}>use</Button>
                        </Col>
                        </Row>
                    )
                })}
            </Container>
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

export default LexiconModal;