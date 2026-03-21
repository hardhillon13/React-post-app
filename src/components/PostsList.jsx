import {useState} from 'react';
import NewPost from './NewPost';
import Post from './Post'
import classes from './PostsList.module.css';
import Modal from './Modal'

function PostsList({isPosting, onStopPosting}){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
        {isPosting && (
        <Modal onClose={onStopPosting}>
        <NewPost 
        onCancel={onStopPosting}
        onAddPost={addPostHandler}/> 
        </Modal>
        )}
        {posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.garden} garden={post.garden} description={post.description}/>)}
            </ul>
        )}
        {posts.length === 0 && (
            <div style={{ textAlign: 'center', color: 'white'}}>
                <h2>There are no reviews to be found yet!</h2>
                <p>Be the first to add!</p>
            </div>
        )}
        </>
    );
}

export default PostsList;