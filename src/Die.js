/**
 * Die component:
 *   * props: 
 *   * state: 
 *   * context: 
 *      * takes a background color chosen by the user
 *      * color context from top-level casino is consumed here
 *   * has a variable number of sides
 */
import React, { useContext } from "react";
import DiceColorContext from "./DiceColorContext";
import "./Die.css";

const Die = () => {
  const diceColor = useContext(DiceColorContext);
  return (
    <div style={{ backgroundColor: diceColor }} className="Die">
      3
    </div>
  );
}

export default Die;