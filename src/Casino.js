/**
 * Casino component:
 *   * Allows players to choose a lucky color for the dice
 *   * Shows the game tables
 * 
 *   * props: 
 *   * state: 
 *   * context: 
 */
import React, { useState } from "react";
import Tables from "./Tables";
import DiceColorContext from "./DiceColorContext";
import "./Casino.css";

function Casino({ 
  colors = [
    ['darkgreen', 'Dark Green'],
    ['tomato', 'Tomato'],
    ['darkblue', 'Dark Blue'],
    ['purple', 'Purple'],
    ['teal', 'Teal']
  ]
}) {
  const [diceColor, setDiceColor] = useState(colors[0][0]);
  const handleChangeColor = (evt) => {
    const { value } = evt.target;
    setDiceColor(value);
  }

  return (
    <div className="Casino">
      <h1>Rithm Casino!</h1>
      <p>As long as you keep losing, drinks are on the house.</p>
      <label for="color-select">Select Your Lucky Dice Color:</label>
      <select name="colors" id="color-select" onChange={handleChangeColor}>
        {colors.map(c => <option value={c[0]}>{c[1]}</option>)}
      </select>
      <DiceColorContext.Provider value={diceColor} >
        <Tables />
      </DiceColorContext.Provider>
    </div>
  );
}

export default Casino;