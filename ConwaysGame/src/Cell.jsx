// Cell.jsx
import React from 'react';
import './App.css';

const Cell = ({ alive }) => {
  return <div className={`cell ${alive ? 'alive' : ''}`}></div>;
};

export default Cell;
