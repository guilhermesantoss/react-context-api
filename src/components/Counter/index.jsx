import React from 'react';

import { useCount } from '../../context/CounterContext';

function Counter() {
  const { count, setCount } = useCount();

  return (
    <div>
      <span>
        <b>Count: {count}</b>
      </span>

      <br />

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
