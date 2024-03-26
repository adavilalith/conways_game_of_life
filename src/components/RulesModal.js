import { useState } from 'react';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';

function RulesModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-dark  mx-5 my-3" onClick={handleShow}>
      <p className='h3'>{props.text}</p>
      </button>

      <Modal show={show} onHide={handleClose}  centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title ><p className='h2'>Conway's Game of Life</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
              <Row className='my-2 mb-5'>
                <Col>
                  The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.<br></br><br></br>
                  
                  Conway's Game of Life is an utterly mesmerizing cellular automaton! Picture a vibrant world where tiny cells on a grid come alive, dance, and even give birth—all governed by simple rules. In this digital universe, cells thrive or perish based on the company they keep, resulting in breathtaking patterns, pulsating rhythms, and even whimsical "spaceships" that roam the grid. It's not just a game; it's a dazzling display of emergent complexity that enchants and captivates across all horizons. Dive in, and watch as simplicity evolves into a kaleidoscope of wonder!
                </Col>
              </Row>
              <Container className="ps-5 py-3" style={{border:"1px solid black", borderRadius:'5px'}}>
              <Row>
                <Col className='col-9 h4'>Rules</Col>
              </Row>
              <Row>
                <Col><strong>For cells with life:</strong></Col>
              </Row>
              <Row className='my-3'>
               <Col className='col-9'>Underpopluation, If the alive cell has only one alive neighbours it <strong>dies</strong></Col>
               <Col className='d-flex align-items-center justify-content-center'>
                  <img src="./images/rule1_1.png" alt="" />
                  <img className="mx-2" src="./images/right-arrow.png" alt=""  width={25}/>
                  <img src="./images/rule1_2.png" alt="" />
              </Col>
              </Row>
              <Row className="my-3">
                <Col className="col-9">Overpopluation, If the alive cell has more than 3 alive neighbours it <strong>dies</strong></Col>
                <Col className='d-flex align-items-center justify-content-center'>
                  <img src="./images/rule2_1.png" alt="" />
                  <img className="mx-2" src="./images/right-arrow.png" alt=""  width={25}/>
                  <img src="./images/rule2_2.png" alt="" />
              </Col>
              </Row>
              <Row className="my-3">
                <Col className="col-9">Stability, If the alive cell has 2 or 3 neighbours it continues to <strong>live  </strong> </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                  <img src="./images/rule3_1.png" alt="" />
                  <img className="mx-2" src="./images/right-arrow.png" alt=""  width={25}/>
                  <img src="./images/rule3_2.png" alt="" />
              </Col>
              </Row>
              <Row className="my-3">
                <Col><strong>For dead cells:</strong></Col>
              </Row>
              <Row>
                <Col className="col-9">Population, If a dead cell has exactly 3 alive neighbours if becomes <strong>alive</strong></Col>
                <Col className='d-flex align-items-center justify-content-center'>
                  <img src="./images/rule4_1.png" alt="" />
                  <img className="mx-2" src="./images/right-arrow.png" alt=""  width={25}/>
                  <img src="./images/rule4_2.png" alt="" />
              </Col>
              </Row>
              </Container>
              <Row>
                <Col>
                  <p className='h4 mt-5 mb-3'>What to learn more?</p>
                </Col>
              </Row>
              <Row>
                <Col className='d-flex justify-content-center my-2'>
                <iframe src="https://www.youtube.com/embed/R9Plq-D1gEk?si=y2-Uu5xQCsshBRS0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Col>
                <Col className='d-flex justify-content-center my-2'>
                <iframe src="https://www.youtube.com/embed/Kk2MH9O4pXY?si=9dUitGtXB7rNoyIG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Col>
              </Row>
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

export default RulesModal;