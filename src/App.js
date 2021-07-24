import React, { useState } from 'react';
import Symbol from './components/Symbol'
import './App.css';

function App() {
  const [inputExpr, setInputExpr] = useState('')
  const [memory, setMemory] = useState([])

  return (
    <>
      <div className="calculator">
        <Symbol value={inputExpr} />
        <Symbol value="RST" inputExpr={inputExpr} setInputExpr={setInputExpr} memory={memory} setMemory={setMemory} />
        <Symbol value="M" inputExpr={inputExpr} setInputExpr={setInputExpr} memory={memory} setMemory={setMemory} />
        <Symbol value="C" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="<" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="7" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="8" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="9" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="+" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="4" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="5" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="6" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="-" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="1" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="2" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="3" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="*" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="0" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="." inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="=" inputExpr={inputExpr} setInputExpr={setInputExpr} />
        <Symbol value="/" inputExpr={inputExpr} setInputExpr={setInputExpr} />
      </div>
      <ul className='memory'>
        {[...memory].map((mem, i) => {
          return (
            <div key={i}>
              <Symbol value={mem} inputExpr={inputExpr} setInputExpr={setInputExpr} />
            </div>
          )
        }
        )}
      </ul>
    </>
  );
}

export default App;
