import React from 'react';
import './css/reset.css';
import './css/common.css';
import { Routes,Route} from 'react-router-dom';
import Login from './components/Login.js';
import Join from './components/Join.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>    
    </>
  );
}

export default App;
