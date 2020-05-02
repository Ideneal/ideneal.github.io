import React from "react";
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Menu from "./Menu";
import Logo from "./Logo";


const useStyles = makeStyles(theme => ({
    appbar: {
        backgroundColor: '#252627',
        flexDirection: 'row',
    },
    toolbar: {
        width: theme.breakpoints.values.sm,
        margin: 'auto',
    },
    logo: {
        flexGrow: 1,
    },
}));


const NavBar = ({routes}) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.logo}>
                    <Logo/>
                </div>
                <Menu routes={routes}/>
            </Toolbar>
        </AppBar>
    );
};

NavBar.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    })).isRequired,
};

export default NavBar;