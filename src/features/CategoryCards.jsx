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

const theme = createTheme();

theme.typography.h3 = {
  // marginLeft: "13rem",
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

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Shop by category</Typography>
      </ThemeProvider>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          sx={{
            borderRadius: "10px",
            gap: "37px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: " space-between",
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
                height: "70px",
                width: "260px",
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
  );
}

export default CategoryCards;
