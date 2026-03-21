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
        {isPosting ?
        <Modal onClose={onStopPosting}>
        <NewPost 
        onCancel={onStopPosting}
        onAddPost={addPostHandler}/> 
        </Modal> : false}
            <ul className={classes.posts}>
                <Post garden="kildonan park" description="wonderful place to walk in greenery" />
            </ul>
            </>
    );
}

export default PostsList;