import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  createTheme,
  ThemeProviderider,

  // ThemeProvider,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Karupattimini from "../features/image/Karupattimini.png";
import Rice1 from "../features/image/Rice1.png";
import coconutoilmini from "../features/image/coconutoilmini.png";
import healthmixmini from "../features/image/healthmixmini.png";
import styled from "@emotion/styled";
import { theme } from "../commonCompond/theme";
import { ThemeProvider } from "@emotion/react";

const ResponsiveTypography = styled("div")(({ theme }) => ({
  fontSize: "14px",
  [theme.breakpoints?.down("sm")]: {
    fontSize: "13px",
  },
}));
// const theme = createTheme();

// theme.typography.h3 = {
//   fontFamily: "'Poppins', sans-serif",
//   fontWeight: "600px",
//   fontSize: "28px",
//   VerticalTrim: "Cap height",
//   lineHeight: "44.07px",
//   marginBottom: "2rem",
//   marginTop: "3rem",
// };

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
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          ml: { xs: 7, sm: 12, md: 8, lg: 12, xl: 22 },
          mr: { xs: 3, sm: 5, md: 8, lg: 19, xl: 19 },
        }}
      >
        <Typography variant="h3" mt={6}>
          Shop by category
        </Typography>

        <Box sx={cardContainerStyle}>
          <Box
            mt={5}
            sx={{
              borderRadius: "10px",
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
                      <ResponsiveTypography
                        level="title-md"
                        sx={{ fontWeight: "bold", fontSize: "14px" }}
                      >
                        {item.name}
                      </ResponsiveTypography>
                      <ResponsiveTypography sx={{ fontSize: "13px" }}>
                        {item.price}
                      </ResponsiveTypography>
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
    </ThemeProvider>
  );
}

export default CategoryCards;
