import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useState } from "react";
import karupattiNavImage from "../features/image/karupattiNavImage.png";

import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  ThemeProvider,
  makeStyles,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import styled from "@emotion/styled";
import { theme } from "../commonCompond/theme";
import { useMediaQuery } from "@mui/material";
const pages = ["Home", "Karupatti", "Rice", "Cold pressed oil", "Health mix"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveTypography = styled("div")(({ theme }) => ({
  fontSize: "14px",
  [theme.breakpoints?.down("lg")]: {
    fontSize: "12px",
  },
}));
function ResponsiveAppBar() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  // const classes = ResponsiveTypography();
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  // const ResponsiveAppBar = {
  //   flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 20px)" },
  // };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            width: "100%",
            color: "black",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img
                  src={karupattiNavImage}
                  alt={karupattiNavImage}
                  width={"70%"}
                />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon
                    sx={{ fontSize: isSmallScreen ? "small" : "large" }}
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <ResponsiveTypography
                        textAlign="center"
                        sx={{ color: "black" }}
                      >
                        {page}
                      </ResponsiveTypography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  gap: "20px",
                  fontWeight: "600px",
                }}
              >
                {pages.map((page) => (
                  <ResponsiveTypography
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: page === "Home" ? "#2C9763" : "black",
                      display: "flex",
                    }}
                  >
                    {page}
                  </ResponsiveTypography>
                ))}
              </Box>

              <Box mb={1}>
                {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel
                    sx={{
                      minWidth: isSmallScreen ? 120 : 200,
                      fontSize: "14px",
                    }}
                  >
                    English
                  </InputLabel>
                  <Select value={age} onChange={handleChange}>
                    <MenuItem>English</MenuItem>
                    <MenuItem>Tamil</MenuItem>
                  </Select>
                </FormControl> */}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {/* <SearchIcon /> */}
                    <SearchIcon
                      sx={{ fontSize: isSmallScreen ? "small" : "large" }}
                    />
                    <FavoriteBorderIcon
                      sx={{ fontSize: isSmallScreen ? "small" : "large" }}
                    />
                    <ShoppingCartOutlinedIcon
                      sx={{ fontSize: isSmallScreen ? "small" : "large" }}
                    />
                    <PermIdentityOutlinedIcon
                      sx={{ fontSize: isSmallScreen ? "small" : "large" }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;

// import AppBar from "@mui/material/AppBar";

// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
// import { ButtonBase, FormControl, Grid, Select } from "@mui/material";
// import karupattiNavImage from "../features/image/karupattiNavImage.png";
// import { useState } from "react";
// const pages = ["Home", "Karupatti", "Rice", "Cold pressed oil", "Health mix"];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
//   const [age, setAge] = useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     // setAnchorElUser(null);
//   };

//   return (
//     <Grid container mt={5}>
//       <Grid item xs={11} md={11} sm={12} lg={11.4} xl={12}>
//         <AppBar
//           position="static"
//           sx={{
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "10px",
//           }}
//         >
//           {/* <Container> */}
//           <Toolbar>
//             <Box
//               sx={{
//                 display: { xs: "none", md: "flex" },
//               }}
//             >
//               <img
//                 src={karupattiNavImage}
//                 alt={karupattiNavImage}
//                 width={"50%"}
//               />
//             </Box>
//             <Box sx={{ display: { xs: "flex", md: "none" } }}>
//               <IconButton onClick={handleOpenNavMenu}>
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 anchorEl={anchorElNav}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography sx={{ color: "black", textAlign: "center" }}>
//                       {page}
//                     </Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Box
//               sx={{
//                 justifyContent: " flex-start",
//                 flexGrow: 1,
//                 display: { xs: "none", md: "flex" },
//                 gap: "16px",
//               }}
//             >
//               {pages.map((page) => (
//                 <Box
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     color: page === "Home" ? "#2C9763" : "black",
//                     display: "flex",
//                     fontWeight: "400px",
//                     justifyContent: "start",
//                   }}
//                 >
//                   {page}
//                 </Box>
//               ))}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               {/* <IconButton> */}
//               <Box sx={{ display: "flex", gap: "14px", alignItems: "center" }}>
//                 <Box>
//                   <Box sx={{ minWidth: 100 }}>
//                     <Select
//                       onChange={handleChange}
//                       displayEmpty
//                       sx={{
//                         fontWeight: "600",
//                       }}
//                     >
//                       <MenuItem>Tamil</MenuItem>
//                       <MenuItem>English</MenuItem>
//                     </Select>
//                   </Box>
//                 </Box>
//                 <Box sx={{ gap: "11px", display: "flex" }}>
//                   <SearchRoundedIcon
//                     // onClick={handleOpenUserMenu}
//                     color="#30363C"
//                   />
//                   <FavoriteBorderRoundedIcon
//                     // onClick={handleOpenUserMenu}
//                     color="#30363C"
//                   />
//                   <ShoppingCartOutlinedIcon
//                     // onClick={handleOpenUserMenu}
//                     color="#30363C"
//                   />
//                   <PersonOutlineRoundedIcon
//                     // onClick={handleOpenUserMenu}
//                     color="#30363C"
//                   />
//                 </Box>
//               </Box>

//               {/* </IconButton> */}
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               ></Menu>
//             </Box>
//           </Toolbar>
//           {/* </Container> */}
//         </AppBar>
//       </Grid>
//     </Grid>
//   );
// }
// export default ResponsiveAppBar;
