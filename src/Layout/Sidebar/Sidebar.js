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

//eslint-disable-next-line
import { Avatar, Collapse, Typography } from "@mui/material";
import Profile from "../../Assets/Images/profile.jpg";
import { useEffect } from "react";
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
  const DropdownLink = {
    height: "48px",
    paddingLeft: "3rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#637381",
    fontSize: "16px",
  };
  const SidebarLabel = {
    // marginLeft: "16px",
  };
  const { pathname } = useLocation();
  const [open, setOpen] = useState([]);
  useEffect(() => {
    const index = navConfig.findIndex((item) => {
      if (!item.subNav) {
        return item.link === pathname;
      } else {
        return item.subNav.find((subitem) => subitem.link === pathname);
      }
    });
    if (index !== -1) {
      setOpen((newOpen) => {
        newOpen[index] = true;
        return [...newOpen];
      });
    }
  }, [pathname]);

  const handleClick = (index) => {
    setOpen((prev) => {
      const newOpen = [...prev];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
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
        {navConfig.map((item, index) => (
          <>
            <Link to={item.link} style={linkStyle} key={item.id}>
              <ListItem
                key={item.id}
                disablePadding
                sx={{ ml: 1.5 }}
                className={`${pathname === item.link ? "active" : "regular"}`}
                onClick={() => handleClick(index)}
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
                </ListItemButton>
              </ListItem>
            </Link>
            {item.subNav
              ? item.subNav.map((subItem) => (
                  <Collapse
                    in={open[index]}
                    sx={{ display: open[index] ? "block" : "none" }}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Link to={subItem.link} key={index} style={DropdownLink}>
                      <ListItemIcon
                        sx={{
                          minWidth: "32px",
                          color:
                            pathname === subItem.link ? "#2065d1" : "#637381",
                        }}
                      >
                        {subItem.icon}
                      </ListItemIcon>
                      <Typography
                        style={SidebarLabel}
                        sx={{
                          color:
                            pathname === subItem.link ? "#2065d1" : "#637381",
                        }}
                      >
                        {subItem.title}
                      </Typography>
                    </Link>
                  </Collapse>
                ))
              : null}
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
