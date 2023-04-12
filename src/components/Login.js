import { Link } from 'react-router-dom';
import styles from '../css/Login.module.css';

function Login(props) {

  function passwordShow(){
    if(props.imageSrc === 'img/icon_eye_01.png'){
        props.setImageSrc('img/icon_eye_02.png');
        props.setInputType('password');
    }else{
        props.setImageSrc('img/icon_eye_01.png');
        props.setInputType('text');
    }
  }


    return(
        <div className="wrap">
          <div className={styles.main}>로그인</div>
          <div className={`${styles.txt_box} ${styles.txtID_box}`}>
            <input type="text" id="txtID" required/>
            <label htmlFor="txtID">아이디</label>
          </div>
          <div className={`${styles.txt_box} ${styles.txtPW_box}`}>
            <input type={props.inputType} id="txtPW" required/>
            <label htmlFor="txtPW">비밀번호</label>
            <img src={process.env.PUBLIC_URL+props.imageSrc} onClick={props.passwordShow}/>
          </div>
          <div className={`${styles.check_box} ${styles.idsave}`}>
            <input type="checkbox" id="saveID"/>
            <label htmlFor="saveID">
            <div>아이디 저장</div>
            </label>
          </div>
          <Link className={`btns ${styles.login}`} to="/main">
            <img src={process.env.PUBLIC_URL+"img/icon_01.svg"}/>
            로그인
          </Link>
          <Link to="/join" className={styles.sign_con}>계정이 없으십니까?<span className="sign">회원가입</span></Link>
        </div>
    )
}

export default Login;