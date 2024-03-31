# Conway's Game of Life in React

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

This simple implementation of Conway's Game of Life using React and its various features.


👉[Play the game Here!!](https://conways-game-of-life-five-gamma.vercel.app/)👈


## Table of Contents

- [About the Project](#about-the-project)
- [How to Play](#how-to-play)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Future updates](#future-updates)

## About the Project

Conway's Game of Life is a cellular automaton devised by mathematician John Conway. This project is a React-based implementation of the game, where the evolution of cells is determined by simple rules. The game is played on a two-dimensional grid, and the cells can be in one of two states: alive or dead. The game evolves over generations based on the initial state of the cells. [Learn more here](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)

## How to Play

- Click on the grid cells to toggle their state between alive and dead.
- Draw a pattern of your choice, select one from lexicon or funstuff or click on random
- Use the "Start" button to initiate the evolution of the cells.
- Press "Stop" to pause the evolution at any time.
- Speed can adjusted using the slider or manually entered.
- You can manually progress to the next generation using the "Next" button.
- Clear the grid with the "Reset" button.
- Click on Rules to learn the rules of the game
- Experiment with different initial patterns to observe their evolution!

👀 If you find any intresting patterns send me a screenshot and i will add it to 'fun stuff' 👀

## Screenshots

<img src="https://drive.google.com/uc?id=14XccEBowAVObbxh4z8QkfZgmugLWQZkO" style="width: 100%; height: auto"/>
<p style="text-align: center">rules and additional information</p>


<img src="https://drive.google.com/uc?id=10QJub65h7lmNLCFE9zsMan475kDXMlfv" style="width: 100%; height: auto"/>
<p style="text-align: center">initial random start of grid</p>


<img src="https://drive.google.com/uc?id=1gGWZUOHLwIWFg87yKyg-WE75AAXY0vpk" style="width: 100%; height: auto"/>
<p style="text-align: center">grid after 100+ iterations of the game</p>

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/game-of-life-react.git
   ```
2. Changing the repository:
   
   ```sh
    cd conways_game_of_life
   ```
3. Installing dependencies:
   
   ```sh
   npm install
   ```

## Usage
1. start react app by using:
   
   ```sh
   npm start
   ```
   
2. Open your browser and visit http://localhost:3000 to view the application.

## Future Updates

- add an export and import pattern feature.
- add a save pattern feature, experiment with cookies
- convert grind from using divs to a html canvas based grid
