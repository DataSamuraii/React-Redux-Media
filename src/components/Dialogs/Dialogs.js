import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={props.id} className={({isActive}) => isActive ? s.active : s.dialogs_list__item}>{props.name}</NavLink>)
}

const MessageItem =(props) => {
    return <div className={s.messages_list__item}>{props.messageText}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                <DialogItem id='1' name='Liza'/>
                <DialogItem id='2' name='Bogdan'/>
                <DialogItem id='3' name='Liza'/>
                <DialogItem id='4' name='Bogdan'/>
            </div>
            <div className={s.messages_list}>
                <MessageItem messageText='Hey'/>
                <MessageItem messageText='Henlo'/>
                <MessageItem messageText='He-he'/>
            </div>
        </div>
    );
}

export default Dialogs;