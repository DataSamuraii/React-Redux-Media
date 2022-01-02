import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Delete post</button>
            </div>
            <div>
                <Post message='It is my first post' likeCounter='15'/>
                <Post message='Hello, world!' likeCounter='20'/>
            </div>
        </div>
    )
}
export default MyPosts;