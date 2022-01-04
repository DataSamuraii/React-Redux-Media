import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={props.id} className={({isActive}) => isActive ? s.active : s.dialogs_list__item}>{props.name}</NavLink>)
}

const MessageItem = (props) => {
    return <div className={s.messages_list__item}>{props.messageText}</div>
}

const Dialogs = () => {

    let dialogsData = [
        {id: '1', name: 'Liza'},
        {id: '2', name: 'Bogdan'}
    ]
    let messagesData = [
        {id: '1', messageText: 'Hey'},
        {id: '2', messageText: 'Henlo'},
        {id: '3', messageText: 'He-he'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
            </div>
            <div className={s.messages_list}>
                <MessageItem messageText={messagesData[0].messageText}/>
                <MessageItem messageText={messagesData[1].messageText}/>
                <MessageItem messageText={messagesData[2].messageText}/>
            </div>
        </div>
    );
}

export default Dialogs;