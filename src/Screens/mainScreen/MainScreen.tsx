import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Link, Route, Routes, useLocation } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

import Login from "../Login/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import profilepic from "../../assets/image/proifile.png";
const drawerWidth = 240;
import "./MainScreen.scss";
import Receivings from "../Receivings/Receivings";
import Products from "../Products/Products";
import Recipes from "../Recipes/Recipes";
import Orders from "../Orders/Orders";
import Suppliers from "../Supliers/Suppliers";
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const location = useLocation(); // For identifying the current route

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const tabs = [
    { text: "Receivings", path: "/Receivings", icon: <DashboardIcon /> },
    { text: "Products", path: "/Products", icon: <PersonIcon /> },
    { text: "Recipes", path: "/Recipes", icon: <ArticleIcon /> },
    { text: "Orders", path: "/Orders", icon: <SettingsSuggestIcon /> },
    { text: "Suppliers", path: "/Suppliers", icon: <SettingsSuggestIcon /> },

    { text: "LogOut", path: "/Login", icon: <ExitToAppIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#ffff" }}>
        <Toolbar>
          <IconButton
            // color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "black",
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "#23262F",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {location.pathname.substr(1).charAt(0).toUpperCase() +
              location.pathname.substr(2)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ backgroundColor: "black" }}>
        <DrawerHeader>
          <Typography
            onClick={handleDrawerClose}
            className="logo"
            sx={{
              fontFamily: "Poppins",
              fontSize: "24.62px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Foodu
          </Typography>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
        </DrawerHeader>
        <Divider style={{ backgroundColor: "white", opacity: 0.2 }} />

        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", p: 2 }}
        >
          <img
            src={profilepic}
            alt="Profile"
            style={{ borderRadius: "50%", width: "33px" }}
          />
          <Typography sx={{ opacity: open ? 1 : 0, ml: open ? 2 : 0 }}>
            Michlle Jhon
          </Typography>
        </Box>
        <Divider style={{ backgroundColor: "white", opacity: 0.2 }} />

        <List>
          {tabs.map((tab) => {
            // Determine if the current tab is active by comparing paths
            const isActive = location.pathname === tab.path;

            return (
              <ListItem key={tab.text} disablePadding sx={{ display: "block" }}>
                <Link
                  to={tab.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      backgroundColor: isActive ? "black" : "transparent",
                      color: isActive ? "white" : "inherit",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: isActive ? "white" : "inherit",
                      }}
                    >
                      {tab.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={tab.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          paddingTop: "60px",
          backgroundColor: "#F9FAFC",
          height: "100vh",
        }}
      >
        <Routes>
          <Route path="/*" element={<Receivings />} />

          <Route path="/Receivings" element={<Receivings />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Orders" element={<Orders />} />

          <Route path="/Suppliers" element={<Suppliers />} />
        </Routes>
      </Box>
    </Box>
  );
}
