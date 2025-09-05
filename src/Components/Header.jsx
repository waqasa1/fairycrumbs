import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import logo from "../assets/fairy1.png"
import { Link } from "react-router-dom"

function Header() {
  const [openDialog, setOpenDialog] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleDialogOpen = () => setOpenDialog(true)
  const handleDialogClose = () => setOpenDialog(false)

  const toggleDrawer = (state) => () => {
    setOpenDrawer(state)
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          py: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logo}
              alt="FairyCrumbs Logo"
              sx={{ height: 60, width: "auto", mr: 2 }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#2c1810" }}
            >
              FairyCrumbs
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
            <Button component={Link} to="/" sx={{ color: "#2c1810", fontWeight: 600 }}>
              Home
            </Button>
            <Button component={Link} to="/about" sx={{ color: "#2c1810", fontWeight: 600 }}>
              About Us
            </Button>
            <Button
              variant="contained"
              onClick={handleDialogOpen}
              sx={{
                backgroundColor: "#D2691E",
                color: "#fff",
                borderRadius: "25px",
                px: 3,
                py: 1,
                "&:hover": { backgroundColor: "#a0522d" },
              }}
            >
              Order Now
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: "#2c1810" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, p: 2, display: "flex", flexDirection: "column", height: "100%" }}
          role="presentation"
        >
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
              <ListItemText primary="About Us" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => { handleDialogOpen(); setOpenDrawer(false) }}>
              <ListItemText primary="Order Now" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Popup Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle sx={{ color: "#D2691E", fontWeight: 700 }}>
          Sorry for the inconvenience 🍰
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ color: "#2c1810" }}>
            We are not currently selling online. <br />
            Please visit us in-store to enjoy our magical desserts ✨
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} sx={{ color: "#D2691E", fontWeight: 600 }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Header
