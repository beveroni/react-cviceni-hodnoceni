import React, { useState } from 'react';
import './style.css';

const Star = () => {
  const [glowing, setGlowing] = useState(false);
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div className={starClass}></div>
  );
};

export default Star;