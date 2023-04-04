import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/Login.module.css';

function Login() {
    const [imageSrc, setImageSrc] = useState('img/icon_eye_02.png');

    function imageChage(){
        if(imageSrc === 'img/icon_eye_01.png'){
            setImageSrc('img/icon_eye_02.png');
        }else{
            setImageSrc('img/icon_eye_01.png');
        }
    }


    return(
        <div className="wrap">
          <div className={styled.main}>로그인</div>
          <div className={`${styled.txt_box} ${styled.txtID_box}`}>
            <input type="text" id="txtID" required/>
            <label htmlFor="txtID">아이디</label>
          </div>
          <div className={`${styled.txt_box} ${styled.txtPW_box}`}>
            {imageSrc === 'img/icon_eye_02.png' ? <input type="password" id="txtPW" required/> : <input type="text" id="txtPW" required/> }
            <label htmlFor="txtPW">비밀번호</label>
            <img src={process.env.PUBLIC_URL+imageSrc} onClick={imageChage}/>
          </div>
          <div className={`${styled.check_box} ${styled.idsave}`}>
            <input type="checkbox" id="saveID"/>
            <label htmlFor="saveID">
            <div>아이디 저장</div>
            </label>
          </div>
          <a className={`btns ${styled.login}`}>
            <img src={process.env.PUBLIC_URL+"img/icon_01.svg"}/>
            로그인	
          </a>
          <div className={styled.sign_con}>계정이 없으십니까?<Link to="/join" className="sign">회원가입</Link></div>
        </div>
    )
}

export default Login;