import React, { useState } from 'react';
import './css/reset.css';
import './css/common.css';
import { Routes,Route} from 'react-router-dom';
import Login from './components/Login.js';
import Join from './components/Join.js';

function App() {
  const [imageSrc, setImageSrc] = useState('img/icon_eye_02.png');
  const [modalShow,setModalShow] = useState('show');
  return (
    <>
      <Modal modalShow={modalShow} setModalShow={setModalShow}/>
      <Routes>
        <Route path="/" element={<Login imageSrc={imageSrc} setImageSrc={setImageSrc}/>}/>
        <Route path="/join" element={<Join imageSrc={imageSrc} setImageSrc={setImageSrc}/>}/>
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
        <span>모든 항목에 빈칸을 채워 주세요.</span>
        <div className="btns btn_a" onClick={Modalhiden}>확인</div>
    </div>
    </>
  )
}

export default App;
