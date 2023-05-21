import React from 'react';
import { createRoot } from 'react-dom/client';
import Rating from './Rating';
import './style.css';

const App = () => {
  return <Rating />; 
};

createRoot(
  document.querySelector('#app')
).render(<App />);
