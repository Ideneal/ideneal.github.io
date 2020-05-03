import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";

import {createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import routes from "./constants/routes";


const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
})

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <div className={classes.root}>
                    <CssBaseline/>
                    <NavBar routes={routes}/>
                    <Container component="main" className={classes.main} maxWidth="sm">
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            {routes.map((route, index) => (
                                <Route key={`route-${index}`} path={route.path}>
                                    {route.render}
                                </Route>
                            ))}
                        </Switch>
                    </Container>
                    <Footer/>
                </div>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
