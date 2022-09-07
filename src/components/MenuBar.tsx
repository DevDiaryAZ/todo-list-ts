import React from "react";
import {AppBar, Box, Button, IconButton,Typography, Toolbar} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";

export const MenuBar = () => {
    return (
        <Box sx={{flexGrow: 1}} >
            <AppBar position="static" style={{backgroundColor: 'orange'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Create todolist
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}