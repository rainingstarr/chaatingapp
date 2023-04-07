import React, { useState } from 'react';
import './css/reset.css';
import './css/common.css';
import { Routes,Route} from 'react-router-dom';
import Login from './components/Login.js';
import Join from './components/Join.js';

function App() {
  const [imageSrc, setImageSrc] = useState('img/icon_eye_02.png');
  const [inputType, setInputType] = useState('password');
  const [modalShow,setModalShow] = useState('show');
  const [modalMessage,setModalMessage] = useState('');

  function modalOpen(message) {
    setModalMessage(message)
    setModalShow('show');
  }
  
  function passwordShow(){
    if(imageSrc === 'img/icon_eye_01.png'){
        setImageSrc('img/icon_eye_02.png');
        setInputType('password');
    }else{
        setImageSrc('img/icon_eye_01.png');
        setInputType('text');
    }
}
  return (
    <>
      <Modal modalShow={modalShow} setModalShow={setModalShow} modalMessage={modalMessage}/>
      <Routes>
        <Route path="/" element={<Login imageSrc={imageSrc} inputType={inputType} passwordShow={passwordShow}/>}/>
        <Route path="/join" element={<Join imageSrc={imageSrc} inputType={inputType} passwordShow={passwordShow} modalOpen={modalOpen}/>}/>
      </Routes>    
    </>
  );
}




function Modal(props) {
  function Modalhiden(){
    props.setModalShow('');
  }

  return(
    <>
    <div className={`open_nav_cover ${props.modalShow}`} onClick={Modalhiden}></div>
    <div className={`modal ${props.modalShow}`}>
        <span>{props.modalMessage}</span>
        <div className="btns btn_a" onClick={Modalhiden}>확인</div>
    </div>
    </>
  )
}

export default App;
