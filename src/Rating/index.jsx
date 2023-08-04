import React, { useState } from 'react';
import Star from '../Star';
import './style.css';

const Rating = () => {
  const [value, setValue] = useState(0);
  const handleGlow = (rating) => {
    setValue(rating);
  };

  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star
          onSelect={handleGlow}
          rating={1}
          glowing={value >= 1 ? true : false}
        />
        <Star
          onSelect={handleGlow}
          rating={2}
          glowing={value >= 2 ? true : false}
        />
        <Star
          onSelect={handleGlow}
          rating={3}
          glowing={value >= 3 ? true : false}
        />
        <Star
          onSelect={handleGlow}
          rating={4}
          glowing={value >= 4 ? true : false}
        />
        <Star
          onSelect={handleGlow}
          rating={5}
          glowing={value >= 5 ? true : false}
        />
      </div>
    </div>
  );
};

export default Rating;
