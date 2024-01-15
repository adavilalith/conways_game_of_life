import React,{useCallback, useState, useRef} from 'react'
import './Grid.css'

export default function Grid(props) {

    console.log(window.innerWidth)
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
        grid_size='1vw'
    }
    
    console.log(window.innerWidth)
    console.log(window.innerHeight)
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
            console.log(new_grid)
            return new_grid;
        });
        setTimeout(runGame,200);
    },[colno,rowno]);

    const generateRandomGrid= ()=>{
        let new_grid=JSON.parse(JSON.stringify(grid));
        for(let i=0;i<800;i++){
            const x = Math.floor(Math.random() * (rowno-1 - 0) + 0);
            const y = Math.floor(Math.random() * (colno-1 - 0) + 0);
            new_grid[x][y]=1;
        }
        setGrid(new_grid);
    }

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
        <div className='controlbtns'>
            <button className="btn btn-primary mx-5 my-3" onClick={()=>{setRunning(!running);if(!running){runningref.current=true;runGame()}}}>{(running)?'Stop':'Start'}</button>
            <button className="btn btn-primary mx-5 my-3" onClick={()=>setGrid(()=>{
                                                                    setRunning(false);
                                                                    const rows=[]
                                                                    for(let i=0;i<rowno;i++){
                                                                        rows.push(Array.from(Array(colno),()=>0));
                                                                    }
                                                                    return rows;
                                                                })}
                >Reset</button>
            <button className="btn btn-primary my-3 mx-5" onClick={generateRandomGrid}>generate</button>
      </div>
    </> 
    
    )
}
