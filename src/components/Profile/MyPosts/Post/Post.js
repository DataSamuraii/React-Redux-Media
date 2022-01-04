import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <img
                src='https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg'
                className={s.img}/>
            {props.message}
            <br/><span>{props.likesCounter} likes</span>
        </div>
    )
}
export default Post;