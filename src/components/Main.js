import { Link, Route, Routes } from 'react-router-dom';
import styles from '../css/Main.module.css';
import data from '../data.js';
import Message from './Message.js';

function Main() {
    return(
        <div className={styles.wrap}>
            <div className={styles.header}>
                <Link className={styles.small}><img src={process.env.PUBLIC_URL+"img/icon_06.svg"}></img></Link>
                <Link><img src={process.env.PUBLIC_URL+"img/icon_07.svg"}></img></Link>
                <Link><img src={process.env.PUBLIC_URL+"img/icon_08.svg"}></img></Link>
                <Link className={styles.logOut}><img src={process.env.PUBLIC_URL+"img/icon_09.svg"}></img></Link>
            </div>
            <Routes>
                <Route path="/" element={<Message data={data}/>}></Route>
            </Routes>
        </div>


    )
}

export default Main;