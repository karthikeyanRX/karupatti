import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import karupattiNavImage from "../features/image/karupattiNavImage.png";
import logoFooter from "../features/image/logoFooter.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  const footerData = [
    "Home",
    "Karupatti",
    "Rice",
    "Cold pressed oil",
    "Health mix",
  ];
  const footerAboutData = [
    "Terms & conditions",
    "Shipping policy",
    "Return, Refund And Cancellation Policy ",
    "Privacy Policy ",
    "Intellectual Property",
    "Disclaimer",
  ];
  return (
    <Box sx={{ background: "#30363C" }}>
      <Box
        sx={{
          display: "flex",
          borderBottom: "1px solid gray",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        <Box>
          <img src={karupattiNavImage} alt={karupattiNavImage} width={"75%"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {footerData.map((item) => (
            <Button key={item}>
              <p style={{ color: "white" }}>{item}</p>
            </Button>
          ))}
        </Box>
        <Box>
          <IconButton sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <FacebookIcon sx={{ color: "#EBEEF1" }} />
            <XIcon sx={{ color: "#EBEEF1" }} />
            <InstagramIcon sx={{ color: "#EBEEF1" }} />
            <LinkedInIcon sx={{ color: "#EBEEF1" }} />
            <YouTubeIcon sx={{ color: "#EBEEF1" }} />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "26px",
            rowGap: "0px",
          }}
        >
          {footerAboutData.map((item) => (
            <Button key={item}>
              <p style={{ color: "#EBEEF1" }}>{item}</p>
            </Button>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          background: "white",
          justifyContent: "space-around",
          gap: "22rem",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: "10px",
        }}
      >
        <Box>
          <img src={logoFooter} alt={logoFooter} width={280} />
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#6C7882",
              textAlign: "center",
            }}
          >
            Copyright © 2024 Fintrix. All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
