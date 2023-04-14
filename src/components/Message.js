import { useState } from "react";
import { Link } from "react-router-dom";

function Message(props) {
    const [alert, setAlert] = useState(false);
    const [alertImageSrc, setAlertImageSrc] = useState('img/icon_03.svg');
    function alertChange(){
        if(alert === false){
            setAlert(true);
            setAlertImageSrc('img/icon_04.svg');
        }else{
            setAlert(false);
            setAlertImageSrc('img/icon_03.svg');
        }
    }
    function searchRoom(e){
        let search = e.target.value;
        let list = document.querySelectorAll('.chatting');
        list.forEach((item) => {
            if(item.querySelector('.chatting_name').innerText.indexOf(search) > -1){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        })
    }
    function changeTime(newDate){
        const currentDate = newDate;
        const formattedDate = `${currentDate.getFullYear().toString().slice(-2).padStart(2,'0')}-${(currentDate.getMonth()+1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
        return(formattedDate);
    }
    return(
        <>
            <div className="chattingRoom">
                
                <label>
                    <input className="search" placeholder="검색" onChange={searchRoom}></input><img className="search_img" src={process.env.PUBLIC_URL+"img/icon_02.svg"}></img>
                </label>
                <div className="chattingList">
                    {props.data.map((item, index) => {
                        return(
                            <div className="chatting" onClick={()=>{props.setMessageId(item.id)}} key={index}>
                                <div className={`profile_con ${item.status}`} style={{background:`url(${process.env.PUBLIC_URL}img/img_profile_${item.profile}.jpg) no-repeat 50% / cover`}}></div>
                                <div className="chatting_info">
                                    <div className="chatting_name">{item.name}</div>
                                    <div className="chatting_message">{item.message}</div>
                                </div>
                                {changeTime(new Date()).split(' ')[0] === item.time.split(' ')[0] ? <div className="chatting_time">{item.time.split(' ')[1]}</div> : <div className="chatting_time">{item.time.split(' ')[0]}</div>}
                            </div>
                        )
                    })}
                </div>
            </div>
            {props.messageId === undefined ? null: <ChattingScreen data={props.data.find(item => item.id === props.messageId)} alertImageSrc={alertImageSrc} alertChange={alertChange} setMessageId={props.setMessageId}/>}
        </>
    )
}

function ChattingScreen (props){
    function search (){};
    return(
        <div className="chattingScreen">
            <div className="header">
                <label>
                    <input className="search" placeholder="내용검색" onChange={search}></input><img className="search_img" src={process.env.PUBLIC_URL+"img/icon_02.svg"}></img>
                </label>
                <div className="btn_b btns" onClick={props.alertChange}><img src={process.env.PUBLIC_URL+props.alertImageSrc}></img></div>
                <div className="btn_b btns close" onClick={()=>{props.setMessageId(undefined)}}></div>
                <div className="info">
                    <div className="name">{props.data.name}</div>
                    <div className="status">{props.data.status}</div>
                </div>
            </div>
            <div className="messageScreen">
                <div className="left"><div className="message">밥먹으러 가자</div><div className="time">22:03</div></div>
                <div className="right"><div className="time">22:05</div><div className="message">시러!</div></div>
            </div>
        </div>
    )
}

export default Message;