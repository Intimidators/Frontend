import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "./DashboardMenu.css";

const DashboardMenu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItemButton>
          <ListItemText primary="Community" />
        </ListItemButton>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/dashboard/images");
            }}
          >
            <ListItemText primary="Images" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              navigate("/dashboard/videos");
            }}
          >
            <ListItemText primary="Videos" />
          </ListItemButton>
        </List>

        <ListItem
          disablePadding
          onClick={() => {
            navigate("/dashboard/research");
          }}
        >
          <ListItemButton>
            <ListItemText primary="Research" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/dashboard/webinars");
          }}
        >
          <ListItemButton>
            <ListItemText primary="Webinar" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div
      style={{
        height: "fit-content",
        position: "fixed",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 1rem",
        width: "100%",
      }}
    >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "white", alignSelf: "right" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DashboardMenu;
