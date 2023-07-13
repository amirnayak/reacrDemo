import React, { useState } from 'react';

function NumberCounter() {
  const [count, setCount] = useState(0);

  const increaseNumber = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseNumber}>Increase by 5</button>
    </div>
  );
}

export default NumberCounter;