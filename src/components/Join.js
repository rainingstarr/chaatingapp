
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Join.module.css';

function Join(props) {
    
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

    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; //이메일 유효성 검사 정규식
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //비밀번호 유효성 검사 정규식
    const phoneRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; // 전화번호 유효성 검사 정규식
    const nameRegex = /^[가-힣]{2,5}$/; //이름 유효성 검사 정규식   
        
    function join(e){
        var form = document.joinForm,
        checked = document.querySelector('input[type=radio][name=gender]:checked');
        if(form.txtID.value =="" || form.txtNA.value =="" || form.txtMI.value =="" || form.txtPW.value =="" || form.txtCPW.value =="" || form.txtBD.value =="" || checked == null || form.txtPH.value =="" ){
            props.modalOpen("모든 항목을 입력해주세요");
            e.preventDefault();            
        }else if(isId == false|| isName == false || isMail == false || isPw == false || isCpw == false || isPh == false){
            props.modalOpen("입력한 정보를 형식에 맞게 작성해주세요");
            e.preventDefault();
        }else{
            fetch('http://localhost:8881/sign/signup',{
                method: 'post',
                body: JSON.stringify({
                    user_id: form.txtID.value,
                    user_name: form.txtNA.value,
                    user_email: form.txtMI.value,
                    user_password: form.txtPW.value,
                    user_birth: form.txtBD.value,
                    user_gender: checked.value,
                    user_phone: form.txtPH.value,
                })
            }).then(res => res.json())
            .then(res => {
                if(res.message == "success"){
                    props.modalOpen("회원가입이 완료되었습니다");
                    props.history.push('/login');
                }else{
                    props.modalOpen("회원가입에 실패했습니다");
                    e.preventDefault();
                }
            }).catch((error) => {
                props.modalOpen('회원가입에 실패했습니다 error:',error);
            });
        }
    }

    function check(setMessage,setIs,Message,condition){
        if(condition){
            setMessage(Message);
            setIs(false);
        }else{
            setMessage('');
            setIs(true);
        }
    }
    
    return(
        <>
            <div className="wrap">
                <div className={styles.main}>회원가입</div>
                <form name="joinForm">
                    <div className={`${styles.txt_box} ${styles.txtID_box}`}>
                        <input type="text" id="txtID" name="user_id" onChange={(e)=>{check(setIdMessage, setIsId, '5글자 이상으로 작성해주세요', e.target.value.length < 5)}} required/>
                        <label htmlFor="txtID">아이디{isId ? <div className={styles.checkBox}></div> : null}</label>
                        <div className={styles.warningMsg}>{idMessage}</div>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtNA_box}`}>
                        <input type="text" id="txtNA" name="user_name" onChange={(e)=>{check(setNameMessage, setIsName, '2~5자 사이의 한글로 작성해주세요',!nameRegex.test(e.target.value))}} required/>
                        <label htmlFor="txtNA">이름{isName ? <div className={styles.checkBox}></div> : null}</label>
                        <div className={styles.warningMsg}>{nameMessage}</div>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtMI_box}`}>
                        <input type="text" id="txtMI" name="user_email" onChange={(e)=>{check(setMailMessage, setIsMail, '이메일 형식으로 작성해주세요', !emailRegex.test(e.target.value))}} required/>
                        <label htmlFor="txtMI">이메일{isMail ? <div className={styles.checkBox}></div> : null}</label>
                        <div className={styles.warningMsg}>{mailMessage}</div>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtPW_box}`}>
                        <input type={props.inputType} id="txtPW" name="user_password" onChange={(e)=>{
                            check(setPwMessage,setIsPw,'최소 8자, 최소 하나의 문자 및 숫자를 작성해주세요',!passwordRegex.test(e.target.value));
                            check(setCpwMessage,setIsCpw,'비밀번호와 일치하지 않습니다.',!(document.querySelector('input#txtCPW').value === document.querySelector('input#txtPW').value))
                        }} required/>
                        <label htmlFor="txtPW">비밀번호</label>
                        <div className={styles.warningMsg}>{pwMessage}</div>
                        <img src={process.env.PUBLIC_URL+props.imageSrc} onClick={props.passwordShow}/>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtPW_box}`}>
                        <input type={props.inputType} id="txtCPW" name="user_password" onChange={(e)=>{check(setCpwMessage,setIsCpw,'비밀번호와 일치하지 않습니다.',!(e.target.value === document.querySelector('input#txtPW').value))}} required/>                        
                        <label htmlFor="txtCPW">비밀번호 확인</label>
                        <div className={styles.warningMsg}>{cpwMessage}</div>
                        <img src={process.env.PUBLIC_URL+props.imageSrc} onClick={props.passwordShow}/>
                    </div>
                    <div className={`${styles.txt_box} ${styles.txtBD_box}`}>
                        <input type="date" id="txtBD" name="user_birth"  required/>
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
                        <input type="tel" id="txtPH" name="phone_number" onChange={(e)=>{check(setPhMessage,setIsPh,'예)012-3456-7890 형식으로 작성해주세요.',!phoneRegex.test(e.target.value))}} required/>
                        <label htmlFor="txtPH">전화번호</label>
                        <div className={styles.warningMsg}>{phMessage}</div>
                    </div>
                    <Link to="/" className={`btns ${styles.login}`} onClick={join}>회원가입</Link>
                </form>
                <Link to="/" className={styles.sign_con}>계정이 이미 있으십니까?<span className="sign">로그인 하러가기</span></Link>
            </div>
        </>
    )
}

export default Join;