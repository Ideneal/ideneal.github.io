import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "./Copyright";


const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(3, 2),
        textAlign: 'center',
        opacity: 0.6,
    }
}));


const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Container maxWidth="sm">
                <Copyright/>
            </Container>
        </div>
    );
};

export default Footer;