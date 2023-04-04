
import { Link } from 'react-router-dom';
import styles from '../css/Join.module.css';

function Join() {
    return(
        <>
            <div className='open_nav_cover'></div>
            <div className='modal'>
                <span>모든 항목에 빈칸을 채워 주세요.</span>
                <div className="btns btn_a">확인</div>
            </div>
            <div className="wrap">
                <div className={styles.main}>회원가입</div>
                <form name="joinForm">
                    <div className={`${styles.txt_box} ${styles.txtID_box}`}>
                        <input type="text" id="txtID" name="user_id" required/>
                        <label htmlFor="txtID">아이디</label>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtNA_box}`}>
                        <input type="text" id="txtNA" name="user_name" required/>
                        <label htmlFor="txtMI">이름</label>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtMI_box}`}>
                        <input type="text" id="txtMI" name="user_email" required/>
                        <label htmlFor="txtMI">이메일</label>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtPW_box}`}>
                        <input type="password" id="txtPW" name="user_password" required/>
                        <label htmlFor="txtPW">비밀번호</label>
                        <img src="img/icon_eye_01.png"/>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtPW_box}`}>
                        <input type="password" id="txtCPW" required/>
                        <label htmlFor="txtCPW">비밀번호 확인</label>
                        <img src="img/icon_eye_01.png"/>
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
                    </div>                
                    <a className={`btns ${styles.login}`}>
                        회원가입
                    </a>
                </form>
                <div className={styles.sign_con}>계정이 이미 있으십니까?<Link to="/" className="sign">로그인 하러가기</Link></div>
            </div>
        </>
    )
}

export default Join;