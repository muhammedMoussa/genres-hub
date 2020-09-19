import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        GenresHub
                    </Typography>
                    {/* @TODO: HANDLE AUTH */}
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
