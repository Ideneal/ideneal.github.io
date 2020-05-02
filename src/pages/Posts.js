import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import PostsList from "../components/PostsList";
import posts from "../constants/posts";


const useStyles = makeStyles(theme => ({
    title: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(0, 2)
    },
}));


const Posts = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h3" className={classes.title}>Posts</Typography>
            <PostsList posts={posts}/>
        </React.Fragment>
    );
};

export default Posts;