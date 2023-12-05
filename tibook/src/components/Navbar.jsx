import {
  Menu,
  MenuItem,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  styled,
} from "@mui/material";
import { Pets, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 8px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "16px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: ["none", "block"] }}>
          TIBOOK
        </Typography>
        <Pets sx={{ display: ["block", "none"] }} />

        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <IconBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={() => setOpen(true)} sx={{ width: "32px", height: "32px" }} />
        </IconBox>

        <UserBox onClick={() => setOpen(true)}>
          <Avatar sx={{ width: "32px", height: "32px" }} />
          <Typography variant="span">Tom</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
