import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Karupattimini from "../features/image/Karupattimini.png";
import Rice1 from "../features/image/Rice1.png";
import coconutoilmini from "../features/image/coconutoilmini.png";
import healthmixmini from "../features/image/healthmixmini.png";
import { responsiveProperty } from "@mui/material/styles/cssUtils";

const theme = createTheme();

theme.typography.h3 = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "600px",
  fontSize: "28px",
  VerticalTrim: "Cap height",
  lineHeight: "44.07px",
  marginBottom: "2rem",
  marginTop: "3rem",
};

const items = [
  {
    name: "Karupatti",
    price: "Starts from ₹139",
    image: Karupattimini,
    icon: <ArrowCircleRightIcon sx={{ color: "#973F2C" }} />,
    borderColor: "#973F2C",
  },
  {
    name: "Rice",
    price: "Starts from ₹99",
    image: Rice1,
    icon: <ArrowCircleRightIcon sx={{ color: "#2C6397" }} />,
    borderColor: "#2C6397",
  },
  {
    name: "Cold pressed oil",
    price: "Starts from ₹129",
    image: coconutoilmini,
    icon: <ArrowCircleRightIcon sx={{ color: "#8E972C" }} />,
    borderColor: "#8E972C",
  },
  {
    name: "Health mix",
    price: "Starts from ₹135",
    image: healthmixmini,
    icon: <ArrowCircleRightIcon sx={{ color: "#2C9763" }} />,
    borderColor: "#2C9763",
  },
];

function CategoryCards(props) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item.name === selectedItem ? null : item.name);
    props.setCheckValue(item.name);
  };
  const cardContainerStyle = {
    flex: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33% - 10px)" },
    // superLargeDesktop: {
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5,
    // },
    // desktop: {
    //   breakpoint: { max: 3000, min: 1024 },
    //   items: 4,
    // },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    // },
  };
  // const cardContainerStyle = {
  //   display: "flex",
  //   justifyContent: "center",
  //   mt: 8,
  //   // width: { md: "calc(100% - 1px)" },
  // };
  const ResponsiveAppBarPadding = {
    ml: { xs: 7, sm: 12, md: 8, lg: 12, xl: 22 },
    mr: { xs: 3, sm: 5, md: 8, lg: 19, xl: 19 },
  };
  return (
    // <Grid container justifyContent="center" mt={5}>
    //   <Grid item xs={9} md={8} lg={10} xl={12} sm={9.5}>
    <Box
      sx={ResponsiveAppBarPadding}
      // sx={{
      //   display: "flex",
      //   justifyContent: "center",
      //   flexDirection: "column",
      //   alignItems: "center",
      // }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Shop by category</Typography>
      </ThemeProvider>
      <Box sx={cardContainerStyle}>
        <Box
          sx={{
            borderRadius: "10px",
            // justifyContent: "center",
            gap: "20px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              cursor="pointer"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                height: "65px",
                width: "269px",
                borderRadius: "16px",
                paddingRight: "10px",
                paddingBottom: "5px",
                border: `1px solid ${item.borderColor}`,
                backgroundColor: "white",
                cursor: "pointer",
                backgroundColor:
                  item.name === selectedItem ? "#F0F0F0" : "inherit",
              }}
              onClick={() => handleCardClick(item)}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={item.image} alt={item.name} width={"50px"} />
              </Box>
              <Box sx={{ display: "flex", gap: "36px" }}>
                <Box>
                  <CardContent fontSize={"12px"}>
                    <Typography
                      level="title-md"
                      sx={{ fontWeight: "bold", fontSize: "14px" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      {item.price}
                    </Typography>
                  </CardContent>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
    //   </Grid>
    // </Grid>
  );
}

export default CategoryCards;
