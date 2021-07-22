import React from 'react';
import { Picky } from 'react-picky-with-clear';
import 'react-picky-with-clear/dist/picky.css';
import { options } from './makeData';

function App() {
  const [multiValue, setMultiValue] = React.useState([]);
  const [value, setValue] = React.useState(null);
  return (
    <div className="container">
      <div className="col">
        <h3>Multi select</h3>
        <Picky
          options={options}
          labelKey="label"
          valueKey="value"
          multiple={true}
          includeFilter
          includeSelectAll
          value={multiValue}
          onChange={setMultiValue}
        />
      </div>
      <div className="col">
        <h3>Single select</h3>
        <Picky
          options={options}
          labelKey="label"
          valueKey="value"
          multiple={true}
          includeFilter
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
}

export default App;
