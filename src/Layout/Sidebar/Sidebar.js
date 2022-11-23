import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReactLogo from "../../Assets/Logo.svg";
import "../Style/Sidebar.css";
import Navbar from "../Navbar/Navbar";
import { navConfig } from "../Navbar/NavConfig";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//eslint-disable-next-line
import { Avatar, Collapse, Typography } from "@mui/material";
import Profile from "../../Assets/Images/profile.jpg";
const drawerWidth = 280;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // eslint-disable-next-line
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontWeight: 700,
    borderRadius: "10px",
  };
  const { pathname } = useLocation();
  const [clickedId, setClickedId] = useState();
  // eslint-disable-next-line
  const handleClick = (id) => {
    setClickedId(id);
  };
  const drawer = (
    <div>
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <img src={ReactLogo} alt="React Logo" />
      </Box>
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Box className="accountStyle">
          <Box>
            <Avatar
              src={Profile}
              alt="photoURL"
              sx={{ width: 56, height: 56 }}
            />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
              Rabiul Islam Babu
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Admin
            </Typography>
          </Box>
        </Box>
      </Box>
      <List>
        {navConfig.map((item) => (
          <>
            <Link
              to={item.link}
              style={linkStyle}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <ListItem
                key={item.id}
                disablePadding
                sx={{ ml: 1.5 }}
                className={`${pathname === item.link ? "active" : "regular"}`}
              >
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      color: pathname === item.link ? "#2065d1" : "#637381",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                  {item?.subNav && clickedId===item.id ? <KeyboardArrowDownIcon /> : item?.subNav && <KeyboardArrowRightIcon />}
                </ListItemButton>
              </ListItem>
            </Link>
          </>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRightStyle: "dashed",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
