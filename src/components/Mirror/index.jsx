import React from 'react';

import { useCount } from '../../context/CounterContext';

function Mirror() {
  const { count } = useCount();

  return (
    <div>
      <span>
        <b>Count: {count}</b> 
      </span>
    </div>
  );
}

export default Mirror;
