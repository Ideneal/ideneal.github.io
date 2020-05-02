import React from "react";
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles(theme => ({
    socialLink: {
        margin: theme.spacing(2),
        color: 'white',
    },
}));


const Socials = ({socials}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            {socials.map((social, index) => (
                <Link key={`social-${index}`} href={social.url} className={classes.socialLink}>
                    {social.icon}
                </Link>
            ))}
        </React.Fragment>
    );
};

Socials.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired,
        }),
    ).isRequired,
};

export default Socials;