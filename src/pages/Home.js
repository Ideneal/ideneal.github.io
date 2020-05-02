import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Socials from "../components/Socials";

import socials from "../constants/socials";


const useStyles = makeStyles(theme => ({
    presentation: {
        textAlign: 'center'
    }
}));


const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.presentation}>
            <Typography variant="h2" component="h1" gutterBottom>
                Ideneal
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Full Stack Developer & Security Enthusiast
            </Typography>
            <Socials socials={socials}/>
        </div>
    );
};

export default Home;