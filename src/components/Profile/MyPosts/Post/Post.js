import s from './Post.module.css';

const Post = () => {
    return (
        <div className={`${s.item} ${s.active}`}>
            post 1
        </div>
    )
}
export default Post;