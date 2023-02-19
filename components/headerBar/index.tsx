import styles from "./headerBar.module.scss";
import {Layout} from "antd";
import {Menu} from "antd";
import React, {useEffect, useState} from "react";
import {AppBar, Divider, Drawer, IconButton, List, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';

const {Header} = Layout;

const MenuItems = [
    {
        key: "1",
        label: "Home",
        link: "/"
    },
    {
        key: "2",
        label: "Lean Construction",
        link: "/leanconstruction"
    },
    {
        key: "3",
        label: "About Us",
        link: "/aboutus"
    },
    {
        key: "4",
        label: "Contact Us",
        link: "/contactus"
    }
]

const Redirects: any = {
    "Home": "/",
    "Lean Construction": "/leanconstruction",
    "About Us": "/aboutus",
    "Contact Us": "/contactus"
}

const navItems = ["About Us", "Contact Us"];

export default function HeaderBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuClick = (e: any) => {
        location.href = Redirects[e];
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton onClick={() => menuClick(item)} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
                        component="img" src={"logo.png"} style={{
                        width: "60px",
                        margin: "10px",
                        paddingTop: "10px"
                    }} />
                    <Typography onClick={() => menuClick("Home")}
                                variant="h6" component="div" sx={{ flexGrow: 0, color: 'black' }}>
                        BOHM
                    </Typography>
                    <Box sx={{ flexGrow: 1, marginLeft: 10, display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button onClick={() => menuClick(item)} key={item} sx={{ color: 'black' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </div>
    )
}