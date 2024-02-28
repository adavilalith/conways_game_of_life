import { useState } from 'react';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';

function RulesModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {props.text}
      </Button>

      <Modal show={show} onHide={handleClose}  centered size='xl'>
        <Modal.Header closeButton>
          <Modal.Title ><p className='h2'>Conway's Game of Life</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
              <Row className='my-2 mb-5'>
                <Col>
                  The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.<br></br><br></br>
                  It consists of a grid of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game. 
                </Col>
              </Row>
              <Row>
                <Col className='col-9 h4'>Rules</Col>
                <Col className='col-3 text-center'>Example</Col>
              </Row>
              <Row>
                <Col><strong>For cells with life:</strong></Col>
              </Row>
              <Row>
               <Col>Underpopluation, If the alive cell has only one alive neighbours it <strong>dies</strong></Col>
              </Row>
              <Row>
                <Col>Overpopluation, If the alive cell has more than 3 alive neighbours it <strong>dies</strong></Col>
              </Row>
              <Row>
                <Col>Stability, If the alive cell has 2 or 3 neighbours it continues to <strong>live  </strong> </Col>
              </Row>
              <Row>
                <Col><strong>For dead cells:</strong></Col>
              </Row>
              <Row>
                <Col>Population, If a dead cell has exactly 3 alive neighbours if becomes <strong>alive</strong></Col>
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