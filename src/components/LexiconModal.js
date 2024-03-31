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
                         {name:"Pulsar",pattern:[[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
                                                 [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
                                                 [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
                                                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                 [1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],
                                                 [0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
                                                 [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
                                                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                 [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
                                                 [0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
                                                 [1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],
                                                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                                                 [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
                                                 [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
                                                 [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
                                                ]},
                        ]
    const spaceships = [{name:"Glider",pattern:[[1,0,0],[1,0,1],[1,1,0]]},
                        {name:"Light-weight Spaceship",pattern:[[0,1,1,0,0],[1,1,1,1,0],[1,1,0,1,1],[0,0,1,1,0]]},
                        {name:"Middle-weight Spaceship",pattern:[[0,1,1,1,0,0,],[1,1,1,1,1,0],[1,1,1,0,1,1],[0,0,0,1,1,0]]},
                        {name:"Heavy-weight Spaceship",pattern:[[0,1,1,1,1,0,0],[1,1,1,1,1,1,0],[1,1,1,1,0,1,1,],[0,0,0,0,1,1,0]]},
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
                    <Col><p className='h3'>Still Life:</p></Col>
                </Row>
                <Row>
                    <Col>
                        <p>Still lifes are configurations of cells that remain unchanged from one generation to the next. They do not evolve or move. Examples of still lifes include blocks, beehives, loaves, boats, and tubs.</p>
                    </Col>
                </Row>
                {stillLife.map((choice)=>{
                    return (
                        <Row className='my-4'>
                        <Col className='d-flex justify-content-end'>
                            <p>{choice.name}</p>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-start flex-column'>
                            <img src={`./images/lexiconImages/${choice.name}.png`} alt="" onClick={()=>selectLexiconChoice(choice.pattern)}/>
                            <Button className='my-2 btn-dark'onClick={()=>selectLexiconChoice(choice.pattern)}>use</Button>
                        </Col>
                        </Row>
                    )
                })}
                <Row>
                    <Col><p className='h3'>Oscillators:</p></Col>
                </Row>
                <Row>
                    <p>
                    Oscillators are patterns that repeat periodically after a certain number of generations. They oscillate between two or more configurations. Examples of oscillators include blinkers, toads, beacons, pulsars, and pentadecathlons.
                    </p>
                </Row>
                {oscillators.map((choice)=>{
                    return (
                        <Row className='my-4'>
                        <Col className='d-flex justify-content-end'>
                            <p>{choice.name}</p>
                        </Col>
                        
                        <Col className='d-flex justify-content-center align-items-start flex-column'>
                            <img src={`./images/lexiconImages/${choice.name}.gif`} alt="" onClick={()=>selectLexiconChoice(choice.pattern)}  style={{maxWidth:'30%'}}/>
                            <Button className='my-2 btn-dark'onClick={()=>selectLexiconChoice(choice.pattern)}>use</Button>
                        </Col>
                        </Row>
                    )
                })}
                <Row>
                    <Col><p className='h3'>Spaceships:</p></Col>
                </Row>
                <Row>
                    <p>
                    Spaceships are patterns that move across the grid as the game progresses. They maintain their shape but shift position over time. Examples of spaceships include gliders, lightweight spaceships (LWSS), middleweight spaceships (MWSS), and heavyweight spaceships (HWSS).
                    </p>
                </Row>
                {spaceships.map((choice)=>{
                    return (
                        <Row className='my-4'>
                        <Col className='d-flex justify-content-end'>
                            <p>{choice.name}</p>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-start  flex-column'>
                            <img src={`./images/lexiconImages/${choice.name}.png`} alt="" onClick={()=>selectLexiconChoice(choice.pattern)}  style={{maxWidth:'30%'}}/>
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