import React from 'react';

import Counter from '../containers/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <Counter addDays={2}/>
    </div>
  );
}

export default App;
