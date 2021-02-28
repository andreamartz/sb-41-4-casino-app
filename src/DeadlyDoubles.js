/**
 * DeadlyDoubles component:
 *   * props: 
 *   * state: 
 *   * context: 
 */
import React from "react";
import DieSet from "./DieSet";
import "./DeadlyDoubles.css";

const DeadlyDoubles = () => {
  return (
    <div className="DeadlyDoubles">
      <DieSet />
      <p> Need: 9 Sum: 0 <button>Roll</button></p>
    </div>
  );
}

export default DeadlyDoubles;