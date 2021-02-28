/**
 * DieSet component:
 *   * props: 
 *   * state: 
 *   * context: 
 */
import React from "react";
import Die from "./Die";
import "./DieSet.css";

const DieSet = () => {
  return (
    <div className="DieSet">
      <Die />
      <Die />
      <Die />
    </div>
  );
}

export default DieSet;