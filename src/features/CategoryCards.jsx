import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Karupattimini from "../features/image/Karupattimini.png";
import Rice1 from "../features/image/Rice1.png";
import coconutoilmini from "../features/image/coconutoilmini.png";
import healthmixmini from "../features/image/healthmixmini.png";
import styled from "@emotion/styled";
import { theme } from "../commonCompond/theme";
import { ThemeProvider } from "@emotion/react";

// const ResponsiveTypography = styled("div")(({ theme }) => ({
//   fontSize: "14px",
//   [theme.breakpoints?.down("sm")]: {
//     // fontSize: "9px",
//   },
// }));

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
  {
    name: "Health mix",
    price: "Starts from ₹135",
    image: healthmixmini,
    icon: <ArrowCircleRightIcon sx={{ color: "#2C9763" }} />,
    borderColor: "#2C9763",
  },
  {
    name: "Health mix",
    price: "Starts from ₹135",
    image: healthmixmini,
    icon: <ArrowCircleRightIcon sx={{ color: "#2C9763" }} />,
    borderColor: "#2C9763",
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

  return (
    // <ThemeProvider theme={theme}>
    <Box>
      <Typography variant="h3" mt={4}>
        Shop by category
      </Typography>

      <Grid container spacing={2} mt={2}>
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            md={4}
            lg={3}
            sm={6}
            key={index}
            variant="outlined"
            cursor="pointer"
            onClick={() => handleCardClick(item)}
          >
            <Card
              sx={{
                borderRadius: "20px",
                // padding: "12p
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: "20px",
                border: `1px solid ${item.borderColor}`,
              }}
              onClick={handleCardClick}
            >
              <Box width={"20%"}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: "100%" }}
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>{item.price}</Typography>
              </Box>

              <Box>{item.icon}</Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    // </ThemeProvider>
  );
}

export default CategoryCards;
