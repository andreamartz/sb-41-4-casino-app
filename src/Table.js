/**
 * Table component:
 *   * props: 
 *   * state: 
 *   * context: 
 */
import React from "react";
import DeadlyDoubles from "./DeadlyDoubles";
import "./Table.css";

const Table = () => {
  return (
    <div className="Table">
      <h2>Deadly Doubles</h2>
      <p>Reach the sum before a deadly double takes you down!</p>
      <p>Wins: 1 -- Losses: 0</p>
      <DeadlyDoubles />
    </div>
  );
}

export default Table;