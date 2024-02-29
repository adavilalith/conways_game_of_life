import React,{useCallback, useState, useRef, useEffect} from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap';
import LexiconModal from './LexiconModal';
import FunStuffModal from './FunModal.js';

export default function Grid(props) {
    
    const [lexiconChoice,setLexiconChoice] = useState([[]])
    const [speed,setSpeed] = useState(200)
    const screenWidth=window.innerWidth;
    let colno,rowno;
    let grid_size='1vw'
    if(screenWidth<600){
        colno=50;
        rowno=Math.floor((window.innerHeight/(window.innerWidth/colno))*60/100)
        rowno=60
        grid_size='2vw'
    }
    else{
        colno=100
        rowno=Math.floor((window.innerHeight/(window.innerWidth/colno))*80/100)
        grid_size='0.99vw'
    }
    
    const [grid,setGrid] = useState(()=>{
        const rows=[]
        for(let i=0;i<rowno;i++){
            rows.push(Array.from(Array(colno),()=>0));
        }
        return rows;
    });

    const [running,setRunning]=useState(false);

    const runningref = useRef(running);
    runningref.current = running;

    const nextIteration = ()=>{
        setGrid( g => {
            const lifecond=(x,y)=>{
            const life=g[x][y]
            let alive=0-g[x][y];
            const idx = [(x - 1 + rowno) % rowno,x,(x + 1) % rowno];
            const jdx = [(y - 1 + colno ) % colno, y, (y + 1) % colno  ];
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    if(g[idx[i]][jdx[j]])alive++
                }
            }
            if(life){
                if(alive<2)return false
                if(alive===2||alive===3)return true
                if(alive>3)return false
                return true
            }
            else{
                if(alive===3)return true
                return false
            }
        }
        let new_grid=JSON.parse(JSON.stringify(g));
        for(let i=0;i<rowno;i++){
            for(let j=0;j<colno;j++){
                if(lifecond(i,j)){
                    new_grid[i][j]=1;
                }
                else{
                    new_grid[i][j]=0;
                }
            }
        }
        return new_grid;
    });
    }
    const runGame = useCallback(()=>{
        if(!runningref.current){
            console.log("error")
            return;
        }
        
        setGrid( g => {
                const lifecond=(x,y)=>{
                const life=g[x][y]
                let alive=0-g[x][y];
                const idx = [(x - 1 + rowno) % rowno,x,(x + 1) % rowno];
                const jdx = [(y - 1 + colno ) % colno, y, (y + 1) % colno  ];
                for(let i=0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(g[idx[i]][jdx[j]])alive++
                    }
                }
                if(life){
                    if(alive<2)return false
                    if(alive===2||alive===3)return true
                    if(alive>3)return false
                    return true
                }
                else{
                    if(alive===3)return true
                    return false
                }
            }
            let new_grid=JSON.parse(JSON.stringify(g));
            for(let i=0;i<rowno;i++){
                for(let j=0;j<colno;j++){
                    if(lifecond(i,j)){
                        new_grid[i][j]=1;
                    }
                    else{
                        new_grid[i][j]=0;
                    }
                }
            }
            return new_grid;
        });
        setTimeout(runGame,speed);
    },[colno,rowno,speed]);

    const generateRandomGrid= ()=>{
        let new_grid=JSON.parse(JSON.stringify(grid));
        const mul=(colno===50)?10:6
        for(let i=0;i<colno*mul;i++){
            const x = Math.floor(Math.random() * (rowno-1 - 0) + 0);
            const y = Math.floor(Math.random() * (colno-1 - 0) + 0);
            new_grid[x][y]=1;
        }
        setGrid(new_grid);
    }
    const resetGrid = ()=>setGrid(()=>{
        setRunning(false);
        const rows=[]
        for(let i=0;i<rowno;i++){
            rows.push(Array.from(Array(colno),()=>0));
        }
        return rows;
    })
    useEffect(()=>{
        const loadLexiconChoice = ()=>{
            let new_grid=JSON.parse(JSON.stringify(grid));
            const centerCol=Math.round(colno/2)
            const startCol=centerCol-Math.round(lexiconChoice[0].length/2)
            const centerRow=Math.round(rowno/2)
            const startRow=centerRow-Math.round(lexiconChoice.length/2)
            console.log(startRow,startCol)
            for(let i=0;i<rowno;i++){
                for(let j=0;j<colno;j++){
                    new_grid[i][j]=0;
                }
            }
            for(let r=0;r<lexiconChoice.length;r++){
                for(let c=0;c<lexiconChoice[0].length;c++){
                    console.log(startRow,startCol)
                    if(lexiconChoice[r][c]){
                        new_grid[startRow+r][startCol+c]=1
                    }
                    else{
                        new_grid[startRow+r][startCol+c]=0
                    }
                }
            }
            setGrid(new_grid)
        }
        loadLexiconChoice();
    },[lexiconChoice])
    return (
    <>
        <div className='gamegrid' >
            <div style={{
                display:'grid',
                gridTemplateColumns: `repeat(${colno},${grid_size})`
                }}>
                {grid.map((rows,i)=>
                    rows.map((col,j) => (
                    <div
                    key={`${i}-${j}`}    
                    style={
                        {
                        width:grid_size,
                        height:grid_size,
                        backgroundColor: grid[i][j]?'yellow':'grey',
                        border:'solid 0.1vw black'}}
                    onClick={()=>{
                        setRunning(false)
                        let mut_grid=JSON.parse(JSON.stringify(grid));
                        mut_grid[i][j]=mut_grid[i][j]?0:1;
                        setGrid(mut_grid);
                    }}                    
                    >
                    </div> 
                    ))
                    )}
            </div>
        </div>
        <Container>
                <Row>
                    <Col xs={12} sm={12} lg={6} xl={6} className='d-flex justify-content-center'>
                        <FunStuffModal lexiconState={[lexiconChoice,setLexiconChoice]}></FunStuffModal>
                    </Col>
                <Col xs={12} sm={12} lg={6} xl={6} className='d-flex justify-content-center'>
                        <LexiconModal lexiconState={[lexiconChoice,setLexiconChoice]}></LexiconModal>
                </Col>
                <Col xs={12} sm={12} lg={3} xl={3} className='d-flex justify-content-center'>
                <button className="btn btn-dark mx-5 my-3" onClick={resetGrid}
                >
                    <p className='h4'>Reset</p>
                </button>
                </Col>
                
                <Col xs={12} sm={12} lg={2} xl={2} className='d-flex justify-content-center flex-column align-items-center'>
                    <h4>Speed:</h4>
                    <input type='range' min="10" max="5000" step="100" value={speed} onChange={(e)=>{setSpeed(e.target.value);setRunning(false)}}></input>
                    <input type="number" min="0.001" max="5000" value={speed/1000} onChange={(e)=>setSpeed(e.target.value*1000)}></input>
                </Col>
                <Col xs={12} sm={12} lg={2} xl={2} className='d-flex justify-content-center'>
                    <button className={`btn btn-${(running)?'danger':'dark'} mx-5 my-3`} onClick={()=>{setRunning(!running);if(!running){runningref.current=true;runGame()}}}>
                        <p className='h1'>{(running)?'STOP':'START'}</p>
                    </button>
                </Col>
                <Col xs={12} sm={12} lg={2} xl={2} className='d-flex justify-content-center'>
                    <button className="btn btn-dark my-3 mx-5" onClick={nextIteration}><p className='h4'>Next Iteration</p></button>
                </Col>
                <Col xs={12} sm={12} lg={2} xl={2} className='d-flex justify-content-center'>
                    <button className="btn btn-dark my-3 mx-5" onClick={generateRandomGrid}><p className='h4'>Generate</p></button>
                </Col>
            </Row>
        </Container>            
    </> 
    
    )
}
