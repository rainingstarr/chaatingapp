import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from '../css/Main.module.css';
import serverData from '../data.js';
import Message from './Message.js';

function Main() {
    function sortByTime(data) {
        const sortedData = data.sort((a, b) => {
          const timeA = a.time.replace(/\D/g, '');
          const timeB = b.time.replace(/\D/g, '');
          return timeB - timeA;
        });
        return sortedData;
    }
    const [data,setData] = useState(sortByTime(serverData));
    const [messageId, setMessageId] = useState();

    useEffect(() => {
        setData(sortByTime(data));
    },[data])

      
    return(
        <div className={styles.wrap} style={messageId === undefined ? {width:`600px`}:{width:`1400px`}}>
            <div className={styles.header}>
                <Link to="/main" className={styles.small}><img src={process.env.PUBLIC_URL+"img/icon_06.svg"}></img></Link>
                <Link to="/main/profile"><img src={process.env.PUBLIC_URL+"img/icon_07.svg"}></img></Link>
                <Link to="/main/option"><img src={process.env.PUBLIC_URL+"img/icon_08.svg"}></img></Link>
                <Link to="/" className={styles.logOut}><img src={process.env.PUBLIC_URL+"img/icon_09.svg"}></img></Link>
            </div>
            <Routes>
                <Route path="/" element={<Message data={data} messageId={messageId} setMessageId={setMessageId}/>}></Route>
            </Routes>
        </div>


    )
}

export default Main;