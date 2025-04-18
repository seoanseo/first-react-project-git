import React, { useState } from 'react';

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColor = isHovered ? 'red' : 'black';

  return (
    <h1
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: textColor }}
    >
      Hover over me to change text color
    </h1>
  );
};

export default App;
