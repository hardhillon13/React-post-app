import classes from './Post.module.css';

function Post(props) {
    return ( 
    <li className={classes.post}>
        <p className={classes.garden}>{props.garden}</p>
        <p className={classes.description}>{props.description}</p>
    </li>
    );
}

export default Post;