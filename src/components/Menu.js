import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link as RouterLink} from "react-router-dom";

import withWidth from "@material-ui/core/withWidth";
import {makeStyles} from "@material-ui/core/styles";
import {Menu as MuiMenu} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1, 1.5),
    }
}));


const Menu = ({width, routes}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return ['xs', 'sm'].includes(width) ? (
        <React.Fragment>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <MuiMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {routes.map((route, index) => (
                    <MenuItem key={`menu-${index}`} component={RouterLink} to={route.path} onClick={handleClose}>
                        {route.label}
                    </MenuItem>
                ))}
            </MuiMenu>
        </React.Fragment>
    ) : (
        <nav>
            {routes.map((route, index) => (
                <Link key={`menu-${index}`} variant="button" color="textPrimary" component={RouterLink} to={route.path} className={classes.link}>
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};

Menu.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    })).isRequired,
};

export default withWidth()(Menu);