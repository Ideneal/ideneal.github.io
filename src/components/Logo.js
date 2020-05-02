import React, {useMemo} from "react";
import {Link, useLocation} from "react-router-dom";
import {splitPathname} from "../utility/path";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";


const Logo = () => {
    const location = useLocation()
    const paths = useMemo(() => splitPathname(location.pathname), [location]);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary"># cd </Typography>
            <Typography color="textPrimary" component={Link} to="/">home</Typography>
            {paths.map((path, index, arr) => (index === arr.length - 1) ? (
                <Typography key={`path-${index}`} color="textPrimary">{path.label}</Typography>
            ) : (
                <Typography key={`path-${index}`} color="textPrimary" component={Link} to={path.path}>{path.label}</Typography>
            ))}
        </Breadcrumbs>
    );
};

export default Logo;