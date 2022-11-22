import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import React from "react";
import AccountPopOver from "./AccountPopOver";
import TimerFunction from "./TimerFunction";
import SearchBar from "./SearchBar";

const drawerWidth = 280;
export default function Navbar({ handleDrawerToggle }) {
    // eslint-disable-next-line
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { lg: `calc(100% - ${drawerWidth}px)` },
                ml: { lg: `${drawerWidth}px` },
            }}
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(8px)",
                boxShadow: "none",
            }}
        >
            <Toolbar>
                <IconButton
                    color="default"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: "none" } }}
                >
                    <MenuOpenRoundedIcon />
                </IconButton>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <SearchBar/>
                    <TimerFunction/>
                    <AccountPopOver />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
