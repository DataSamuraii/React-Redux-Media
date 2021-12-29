import './Profile.module.css';
import s from './Profile.module.css';
console.log(s)

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
            </div>
            <div>
                Ava + description
                <img src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'/>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={`${s.item} ${s.active}`}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    )
}
export default Profile;