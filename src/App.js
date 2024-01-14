import './App.css';
import Grid from './components/Grid'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Navbar title="Conway's Game Of Life"
        section1="Rules" link1="./app.js"
        section2="Wiki" link2="https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
        section3="Source Code" link3="https://github.com/adavilalith/conways_game_of_life"
        contactLink="https://www.linkedin.com/in/lalith-adavi-284378274/  "
      ></Navbar>
    <main>
      <Grid rows="70" cols="70" style={{float:'right'}}></Grid>
    </main>
    </>
  );
}

export default App;
