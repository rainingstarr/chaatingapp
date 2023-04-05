import { Link } from 'react-router-dom';
import styled from '../css/Login.module.css';

function Login(props) {

    function imageChage(){
        if(props.imageSrc === 'img/icon_eye_01.png'){
            props.setImageSrc('img/icon_eye_02.png');
        }else{
            props.setImageSrc('img/icon_eye_01.png');
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
            {props.imageSrc === 'img/icon_eye_02.png' ? <input type="password" id="txtPW" required/> : <input type="text" id="txtPW" required/> }
            <label htmlFor="txtPW">비밀번호</label>
            <img src={process.env.PUBLIC_URL+props.imageSrc} onClick={imageChage}/>
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
          <Link to="/join" className={styled.sign_con}>계정이 없으십니까?<span className="sign">회원가입</span></Link>
        </div>
    )
}

export default Login;