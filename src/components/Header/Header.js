import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        GenresHub
                    </Typography>
                    <Button color="inherit">
                        <Link to="/"><HomeIcon /></Link>
                    </Button>
                    {/* @TODO: HANDLE AUTH */}
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header
