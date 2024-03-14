import React from "react";
import {
  Box,
  Card,
  CardContent,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Karupattimini from "../features/image/Karupattimini.jpg";
import Rice from "../features/image/Rice.jpg";
import coconutoilmini from "../features/image/coconutoilmini.jpg";
import healthmixmini from "../features/image/healthmixmini.jpg";

const theme = createTheme();

theme.typography.h3 = {
  // marginLeft: "13rem",
  fontFamily: " 'Poppins', sans-serif",
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
    image: Rice,
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
  const handleCardClick = (item) => {
    props.setCheckValue(item.name);
  };
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Shop by category</Typography>
      </ThemeProvider>
      <Box sx={{ display: "flex", marginBottom: "2rem" }}>
        <Box
          sx={{
            borderRadius: "10px",
            width: "fit-content",
            gap: "20px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                height: "70px",
                width: "240px",
                borderRadius: "16px",
                paddingRight: "10px",
                paddingBottom: "5px",
                border: `1px solid ${item.borderColor}`,
              }}
              onClick={() => handleCardClick(item)}
            >
              <Box sx={{ justifyContent: "center", alignItems: "center" }}>
                <img src={item.image} alt={item.name} width={"50px"} />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <CardContent>
                    <Typography level="title-md" sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                    <Typography>{item.price}</Typography>
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
