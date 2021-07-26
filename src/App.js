import React, { useState } from 'react';
import Symbol from './components/Symbol'
import './App.css';

function App() {
  const [inputExpr, setInputExpr] = useState('')
  const [memory, setMemory] = useState([])
  const [errStatus, setErrStatus] = useState(false);

  return (
    <>
      <div className="calculator">
        <Symbol value={inputExpr} className="input-expr" />
        <Symbol value="RST" inputExpr={inputExpr} setInputExpr={setInputExpr} memory={memory} setMemory={setMemory} className="reset-field" />
        <Symbol value="M" inputExpr={inputExpr} setInputExpr={setInputExpr} memory={memory} setMemory={setMemory} className="save-field" />
        <Symbol value="C" inputExpr={inputExpr} setInputExpr={setInputExpr} className="clear-field" />
        <Symbol value="DEL" inputExpr={inputExpr} setInputExpr={setInputExpr} className="delete-field" />
        <Symbol value="7" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="8" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="9" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="+" inputExpr={inputExpr} setInputExpr={setInputExpr} className="operator-field" />
        <Symbol value="4" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="5" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="6" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="-" inputExpr={inputExpr} setInputExpr={setInputExpr} className="operator-field" />
        <Symbol value="1" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="2" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="3" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="*" inputExpr={inputExpr} setInputExpr={setInputExpr} className="operator-field" />
        <Symbol value="0" inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="." inputExpr={inputExpr} setInputExpr={setInputExpr} className="number-field" />
        <Symbol value="=" inputExpr={inputExpr} setInputExpr={setInputExpr} className="equals-field" errStatus={errStatus} setErrStatus={setErrStatus} />
        <Symbol value="/" inputExpr={inputExpr} setInputExpr={setInputExpr} className="operator-field" />
      </div>
      <ul className='memory'>
        {[...memory].map((mem, i) => {
          return (
            <div key={i}>
              <Symbol value={mem} inputExpr={inputExpr} setInputExpr={setInputExpr} className="memory-field" />
            </div>
          )
        }
        )}
      </ul>

      <p className={errStatus ? 'visible' : 'hidden'}>Error in expression</p>
    </>
  );
}

export default App;
