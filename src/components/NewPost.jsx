import classes from './NewPost.module.css';

function NewPost({onNameChange, onDescriptionChange, onCancel}) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Garden Name</label>
        <input type="text" id="name" required onChange={onNameChange}/>
      </p>
      <p>
        <label htmlFor="body">Description</label>
        <textarea id="body" required rows={3} onChange={onDescriptionChange}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;