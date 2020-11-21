import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.less';

import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

function App() {



  return (
    <div className="App">

    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    
    </div>
  );
}

export default App;
