import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import SevereColdOutlinedIcon from "@mui/icons-material/SevereColdOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PermDeviceInformationOutlinedIcon from "@mui/icons-material/PermDeviceInformationOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import LoginIcon from "@mui/icons-material/Login";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { useNavigate } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useAppStore } from "../../appStore";


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
  // eslint-disable-next-line
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <DashboardOutlinedIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              sx={{ opacity: open ? 1 : 0, color: "#0F2C4F" }}
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <DevicesOutlinedIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Total Assets"
              sx={{ opacity: open ? 1 : 0, color: "#0F2C4F" }}
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <BusinessOutlinedIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Total Departments"
              sx={{ opacity: open ? 1 : 0, color: "#0F2C4F" }}
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <DevicesOtherIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Device Category"
              sx={{ opacity: open ? 1 : 0, color: "#0F2C4F" }}
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SevereColdOutlinedIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Total Threat"
              sx={{ opacity: open ? 1 : 0, color: "#0F2C4F" }}
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <PersonOutlineOutlinedIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="User Activity"
              sx={{ opacity: open ? 1 : 0, color: "#0F2C4F" }}
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <MailOutlineOutlinedIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Updates"
              sx={{ opacity: open ? 1 : 0, color: "#0F2C4F" }}
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <PermDeviceInformationOutlinedIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Device Info."
              sx={{ opacity: open ? 1 : 0, color: "#0F2C4F" }}
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SettingsSuggestOutlinedIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              sx={{
                opacity: open ? 1 : 0,
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
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LoginIcon sx={{ color: "#0F2C4F" }} />
            </ListItemIcon>
            <ListItemText
              primary="Login"
              sx={{
                opacity: open ? 1 : 0,
                color: "#0F2C4F",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNav;
