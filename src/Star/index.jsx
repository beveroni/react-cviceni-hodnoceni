import React, { useState } from 'react';
import './style.css';

const Star = ({ rating, onSelect, glowing }) => {
  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  const handleClick = () => {
    onSelect(rating);
  };
  return <div onClick={handleClick} className={starClass}></div>;
};

export default Star;
