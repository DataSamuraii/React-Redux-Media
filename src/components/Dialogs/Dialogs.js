import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                <div>
                    <NavLink to='1' className={({isActive}) => isActive ? s.active : s.dialogs_list__item}>Liza</NavLink>
                </div>
                <div>
                    <NavLink to='2' className={({isActive}) => isActive ? s.active : s.dialogs_list__item}>Bogdan</NavLink>
                </div>
                <div>
                    <NavLink to='3' className={({isActive}) => isActive ? s.active : s.dialogs_list__item}>Liza</NavLink>
                </div>
                <div>
                    <NavLink to='4' className={({isActive}) => isActive ? s.active : s.dialogs_list__item}>Bogdan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messages__item}>Hey</div>
                <div className={s.messages__item}>Henlo</div>
                <div className={s.messages__item}>He-he</div>
            </div>
        </div>
    );
}

export default Dialogs;