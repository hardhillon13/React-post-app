import classes from './Post.module.css';

function Post({garden, description}) {
    return ( 
    <li className={classes.post}>
        <p className={classes.garden}>{garden}</p>
        <p className={classes.description}>{description}</p>
    </li>
    );
}

export default Post;