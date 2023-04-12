function Message(props) {

    return(
        <div className="chattingRoom">
            <input className="search" placeholder="검색"></input><img className="search_img" src={process.env.PUBLIC_URL+"img/icon_02.svg"}></img>
            <div className="chattingList">
                {props.data.map((item, index) => {
                    return(
                        <div className="chatting" key={index}>
                            <div className="profile_con"><img className="profile" src={process.env.PUBLIC_URL+"img/img_profile_"+item.profile+".jpg"}></img></div>
                            <div className="chatting_info">
                                <div className="chatting_name">{item.name}</div>
                                <div className="chatting_message">{item.message}</div>
                            </div>
                            <div className="chatting_time">{item.time}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Message;