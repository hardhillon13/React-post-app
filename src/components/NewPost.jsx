import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Garden Name</label>
        <input type="text" id="name" required onChange={props.onNameChange}/>
      </p>
      <p>
        <label htmlFor="body">Description</label>
        <textarea id="body" required rows={3} onChange={props.onDescriptionChange}/>
      </p>
    </form>
  );
}

export default NewPost;