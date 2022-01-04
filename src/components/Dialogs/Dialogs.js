import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                <div className={`${s.dialogs_list__item} ${s.active}`}> Liza</div>
                <div className={s.dialogs_list__item}> Bogdan</div>
                <div className={s.dialogs_list__item}> Liza</div>
                <div className={s.dialogs_list__item}> Bogdan</div>
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