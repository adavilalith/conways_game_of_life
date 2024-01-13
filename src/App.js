import './App.css';
import Grid from './components/Grid'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <Navbar title="Conway's Game Of Life"></Navbar>
    <Grid rows="70" cols="70" style={{float:'right'}}></Grid>
    </>
  );
}

export default App;
