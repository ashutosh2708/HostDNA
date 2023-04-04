import React, { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import avatarimg from "../../assets/avatar.jpg";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import SevereColdOutlinedIcon from "@mui/icons-material/SevereColdOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PermDeviceInformationOutlinedIcon from "@mui/icons-material/PermDeviceInformationOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import LoginIcon from '@mui/icons-material/Login';
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { useNavigate } from "react-router-dom";
import {
  styled,
  useTheme,
  Avatar,
  Box,
  Divider,
  CssBaseline,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
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

const SideNav = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        style={{ backgroundColor: "#ffffff" }}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            edge="start"
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <div className="flex items-center ml-3">
            <Avatar
              alt="Travis Howard"
              src={avatarimg}
              sx={{ width: 35, height: 35 }}
            />
            <h5 className="text-black ml-3 font-semibold">Denver Mark</h5>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={isOpen}>
        <DrawerHeader>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardOutlinedIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: isOpen ? 1 : 0, color: "#0F2C4F" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/totalAssets");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DevicesOutlinedIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Total Assets"
                sx={{ opacity: isOpen ? 1 : 0, color: "#0F2C4F" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/totalDep");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <BusinessOutlinedIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Total Departments"
                sx={{ opacity: isOpen ? 1 : 0, color: "#0F2C4F" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/deviceCat");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DevicesOtherIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Device Category"
                sx={{ opacity: isOpen ? 1 : 0, color: "#0F2C4F" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/totalThreat");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SevereColdOutlinedIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Total Threat"
                sx={{ opacity: isOpen ? 1 : 0, color: "#0F2C4F" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/userActivity");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonOutlineOutlinedIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="User Activity"
                sx={{ opacity: isOpen ? 1 : 0, color: "#0F2C4F" }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/updates");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MailOutlineOutlinedIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Updates"
                sx={{ opacity: isOpen ? 1 : 0, color: "#0F2C4F" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/deviceInfo");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.59,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PermDeviceInformationOutlinedIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Device Info."
                sx={{ opacity: isOpen ? 1 : 0, color: "#0F2C4F" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/settings");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SettingsSuggestOutlinedIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{
                  opacity: isOpen ? 1 : 0,
                  color: "#0F2C4F",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 55,
                justifyContent: isOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LoginIcon sx={{ color: "#0F2C4F" }} />
              </ListItemIcon>
              <ListItemText
                primary="Login"
                sx={{
                  opacity: isOpen ? 1 : 0,
                  color: "#0F2C4F",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNav;
