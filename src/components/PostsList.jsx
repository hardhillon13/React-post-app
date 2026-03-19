import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post'
import classes from './PostsList.module.css';
import Modal from './Modal'

function PostsList({isPosting, onStopPosting}){
    
    const [ enteredDescription, setEnteredDescription ] = useState('');
    const [ enteredName, setEnteredName ] = useState('');

//   define event handlers in your components to respond to these events. For example, you might create a function that gets executed when a user clicks a button or submits a form.
   function changeDescriptionHandler(event){
    setEnteredDescription(event.target.value);
   }
   function changeNameHandler(event){
    setEnteredName(event.target.value);
   }

   
    return (
        <>
        {isPosting ?
        <Modal onClose={onStopPosting}>
        <NewPost 
        onNameChange ={changeNameHandler} 
        onDescriptionChange={changeDescriptionHandler}
        onCancel={onStopPosting}/> 
        </Modal> : false}
            <ul className={classes.posts}>
                <Post garden={enteredName} description={enteredDescription} />
                <Post garden="kildonan park" description="wonderful place to walk in greenery" />
            </ul>
            </>
    );
}

export default PostsList;