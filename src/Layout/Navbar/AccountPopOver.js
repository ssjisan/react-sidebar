import {
    Button,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    Box,
    Divider,
} from "@mui/material";
import React, { useState } from "react";
import Profile from "../../Assets/Images/profile.jpg";

import Settings from "./ProfileSettings";
export default function AccountPopOver() {
    const [accountPopOver, setAccountPopOver] = useState(false);
    const handleOpenPopOver = (event) => {
        setAccountPopOver(event.currentTarget);
    };
    const handleClosePopOver = () => {
        setAccountPopOver(null);
    };

    return (
        <>
            <Button onClick={handleOpenPopOver}>
                <Avatar src={Profile} alt="Rabiul Islam" variant="rounded" />
            </Button>
            <Menu
                sx={{ mt: "52px" }}
                id="menu-appbar"
                anchorEl={accountPopOver}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={accountPopOver}
                onClose={handleClosePopOver}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        borderRadius: "12px",
                        filter: "drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.24))",
                        mt: 1.5,
                        boxShadow:
                            "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        p: 2,
                    }}
                >
                    <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                        Rabiul Islam Babu
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                        rabiulislam@gmail.com
                    </Typography>
                </Box>
                <Divider  variant="middle" sx={{ borderStyle: 'dashed' }} />
                {Settings.map((data) => {
                    return (
                        <MenuItem onClick={handleClosePopOver} key={data.id}>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                }}
                            >
                                {data.title}
                            </Typography>
                        </MenuItem>
                    );
                })}
        <Divider  variant="middle" sx={{ borderStyle: 'dashed' }} />
                <MenuItem onClick={handleClosePopOver}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#FF4842",
                        }}
                    >
                        Log Out
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
}
