import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {message: 'It is my first post', likesCounter: '15'},
        {message: 'Hello, world!', likesCounter: '20'}
    ]

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <br/><button>Add post</button>
                <br/><button>Delete post</button>
            </div>
            <div className={s.createdPosts}>
                <Post message={postsData[0].message} likesCounter={postsData[0].likesCounter}/>
                <Post message={postsData[1].message} likesCounter={postsData[1].likesCounter}/>
            </div>
        </div>
    )
}
export default MyPosts;