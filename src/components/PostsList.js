import React, {useMemo} from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import {groupBy} from "../utility/list";

import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles(theme => ({
    ul: {
        backgroundColor: '#303030',
        padding: 0,
    },
}));


const ListItemLink = props => <ListItem button component="a" {...props}/>;


const PostsList = ({posts}) => {
    const classes = useStyles();
    const postsGroupedByYear = useMemo(() => groupBy(posts, item => dayjs(item.date).$y), [posts]);

    return (
        <List>
            {Object.keys(postsGroupedByYear).map(year => (
                <li key={`posts-${year}`}>
                    <ul className={classes.ul}>
                        <ListSubheader>{year}</ListSubheader>
                        {postsGroupedByYear[year].map((post, index) => (
                            <React.Fragment key={`post-${index}`}>
                                <ListItemLink href={post.url}>
                                    <ListItemIcon>
                                        {post.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={post.title} secondary={post.description}/>
                                </ListItemLink>
                                <Divider variant="inset"/>
                            </React.Fragment>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
};

PostsList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            date: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired,
        }),
    ).isRequired,
};

export default PostsList;