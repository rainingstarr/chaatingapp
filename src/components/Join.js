
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Join.module.css';

function Join(props) {
    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pw, setPw] = useState('');
    const [cpw, setCpw] = useState('');
    const [ph, setPh] = useState('');
    
    const [idMessage, setIdMessage] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [mailMessage, setMailMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [cpwMessage, setCpwMessage] = useState('');
    const [phMessage, setPhMessage] = useState('');
    
    const [isId, setIsId] = useState('');
    const [isName, setIsName] = useState('');
    const [isMail, setIsMail] = useState('');
    const [isPw, setIsPw] = useState('');
    const [isCpw, setIsCpw] = useState('');
    const [isPh, setIsPh] = useState('');

    function checkId(){
        if(id === ''){
            setIdMessage('아이디를 입력해주세요.');
            setIsId(false);
        }else{
            setIdMessage('');
            setIsId(true);
        }
    }

    function imageChage(){
        if(props.imageSrc === 'img/icon_eye_01.png'){
            props.setImageSrc('img/icon_eye_02.png');
        }else{
            props.setImageSrc('img/icon_eye_01.png');
        }
    }

    return(
        <>
            <div className="wrap">
                <div className={styles.main}>회원가입</div>
                <form name="joinForm">
                    <div className={`${styles.txt_box} ${styles.txtID_box}`}>
                        <input type="text" id="txtID" name="user_id" required/>
                        <label htmlFor="txtID">아이디</label>
                        <div>{idMessage}</div>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtNA_box}`}>
                        <input type="text" id="txtNA" name="user_name" required/>
                        <label htmlFor="txtMI">이름</label>
                        <div>{idMessage}</div>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtMI_box}`}>
                        <input type="text" id="txtMI" name="user_email" required/>
                        <label htmlFor="txtMI">이메일</label>
                        <div>{idMessage}</div>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtPW_box}`}>
                        {props.imageSrc === 'img/icon_eye_02.png' ? <input type="password" id="txtPW" required/> : <input type="text" id="txtPW" required/> }
                        <label htmlFor="txtPW">비밀번호</label>
                        <div>{idMessage}</div>
                        <img src={process.env.PUBLIC_URL+props.imageSrc} onClick={imageChage}/>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtPW_box}`}>
                        {props.imageSrc === 'img/icon_eye_02.png' ? <input type="password" id="txtCPW" required/> : <input type="text" id="txtCPW" required/> }
                        <label htmlFor="txtCPW">비밀번호</label>
                        <div>{idMessage}</div>
                        <img src={process.env.PUBLIC_URL+props.imageSrc} onClick={imageChage}/>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtBD_box}`}>
                        <input type="date" id="txtBD" name="birth"  required/>
                        <label htmlFor="txtBD">생년월일</label>
                    </div>{/*
                    */}<div className={styles.txtGD_box}>
                        <div>
                            <label htmlFor="txtMA">
                                <input type="radio" id="txtMA" value="man" name="gender"/>
                                <div>
                                    남자
                                </div>
                            </label>
                        </div>{/*
                    */}<div>
                            <label htmlFor="txtGI">
                                <input type="radio" id="txtGI" value="woman" name="gender"/>
                                <div>
                                    여자
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtPH_box}`}>
                        <input type="tel" id="txtPH" name="phone_number" required/>
                        <label htmlFor="txtPH">전화번호</label>
                        <div>{idMessage}</div>
                    </div>                
                    <a className={`btns ${styles.login}`}>
                        회원가입
                    </a>
                </form>
                <Link to="/" className={styles.sign_con}>계정이 이미 있으십니까?<span className="sign">로그인 하러가기</span></Link>
            </div>
        </>
    )
}

export default Join;