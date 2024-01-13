import React,{useCallback, useState, useRef} from 'react'

export default function Grid(props) {
    const colno=Number(props.cols);
    const rowno=Number(props.rows);
    
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
                console.log(1)
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
    },[]);

    return (
    <>
        <div className='my-2' style={{float:'left'}}>
            <div style={{
            display:'grid',
            gridTemplateColumns: `repeat(${colno},20px)`
            }}>
            {grid.map((rows,i)=>
                rows.map((col,j) => (
                <div 
                key={`${i}-${j}`}    
                style={
                    {
                    width:20,
                    height:20,
                    backgroundColor: grid[i][j]?'yellow':'grey',
                    border:'solid 1px black'}}
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
      <div className='container my-3'>
        <button className="btn btn-primary mx-5 my-3" onClick={()=>{setRunning(!running);if(!running){runningref.current=true;runGame()}}}>{(running)?'Stop':'Start'}</button>
        <button className="btn btn-primary mx-5 my-3" onClick={()=>setGrid(()=>{
                                                                const rows=[]
                                                                for(let i=0;i<rowno;i++){
                                                                    rows.push(Array.from(Array(colno),()=>0));
                                                                }
                                                                return rows;
                                                            })}
            >Reset</button>
      </div>
    </> 
    
    )
}
