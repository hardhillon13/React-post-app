import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
  const [ enteredDescription, setEnteredDescription ] = useState('');
    const [ enteredName, setEnteredName ] = useState('');

//   define event handlers in your components to respond to these events. For example, you might create a function that gets executed when a user clicks a button or submits a form.
   function changeDescriptionHandler(event){
    setEnteredDescription(event.target.value);
   }
   function changeNameHandler(event){
    setEnteredName(event.target.value);
   }
   function submitHandler(event){
    event.preventDefault();
    const postData = {
      garden: enteredName,
      description: enteredDescription
    };
    onAddPost(postData);
    onCancel();
   }


  return (

    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Garden Name</label>
        <input type="text" id="name" required onChange={changeNameHandler}/>
      </p>
      <p>
        <label htmlFor="body">Description</label>
        <textarea id="body" required rows={3} onChange={changeDescriptionHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;