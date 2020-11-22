import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.less';

import { InputNumber } from 'antd';

function App() {

  const [calories, setCalories] = useState();
  const [gramsOfSugar, setGramsOfSugar] = useState();

  function onCalorieChange(value) {setCalories(value)};
  function onSugarChange(value) {setGramsOfSugar(value)};

  const sugarFactor = (gramsOfSugar / calories ) * 375;

  return (
    <div className='App'>
      <form>
      <br /><br />
      <h1>Sugar Factor</h1>
      <br />
      <h4>Enter the caloric and sugar content of a portion of food and receive a "factor" of how close the food is to pure sugar.</h4>
      <br /><br />
      <h2>Calories</h2>
      <br />
      <InputNumber 
        min={0}
        onChange={onCalorieChange}
        step={100}
      />
      <br /><br />
      <h2>Grams of Sugar</h2>
      <br />
      <InputNumber
        min={0}
        onChange={onSugarChange}
      />
      <br /><br /><br />
      <h2>Sugar Factor</h2>
      <br />
      <h1>{sugarFactor}</h1>

      <br /><br /><br /><br />
      <p>
        The basis of Sugar Factor is creating a easy to reference metric against pure cane sugar.
        <br />
        A cube typically has 4 grams of sugar and 15 calories, making for a factor of 100.
        <br />
        A factor over 100 means that the food is more concentrated than pure sugar. 
      </p>
      </form>
    </div>
  );
}

export default App;