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
import HealthBenifitArrowImage from "../features/image/HealthBenifitArrowImage.jpg";
import HealthBenififGroupImage from "../features/image/HealthBenififGroupImage.jpg";
import HealthBenifitvitaminImage from "../features/image/HealthBenifitvitaminImage.jpg";
import HeathBeniftshealthcareImage from "../features/image/HeathBeniftshealthcareImage.jpg";

import HealthBeniftAromaImage from "../features/image/HealthBeniftAromaImage.jpg";
import HealthBenifitAgeGroupImage from "../features/image/HealthBenifitAgeGroupImage.jpg";
import HealthBenifitsLeavesImage from "../features/image/HealthBenifitsLeavesImage.jpg";
import HealthBinifitLeafImage from "../features/image/HealthBinifitLeafImage.jpg";
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
    image: HealthBenifitArrowImage,
  },
  {
    name: "Rice",
    price: "Starts from ₹99",
    image: HealthBenififGroupImage,
  },
  {
    name: "Cold pressed oil",
    price: "Starts from ₹129",
    image: HealthBenifitvitaminImage,
  },
  {
    name: "Health mix",
    price: "Starts from ₹135",
    image: HeathBeniftshealthcareImage,
  },

  {
    name: "Karupatti",
    price: "Starts from ₹139",
    image: HealthBeniftAromaImage,
  },
  {
    name: "Rice",
    price: "Starts from ₹99",
    image: HealthBenifitAgeGroupImage,
  },
  {
    name: "Cold pressed oil",
    price: "Starts from ₹129",
    image: HealthBenifitsLeavesImage,
  },
  {
    name: "Health mix",
    price: "Starts from ₹135",
    image: HealthBinifitLeafImage,
  },
];

function HealthBenefits() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Health benefits</Typography>
      </ThemeProvider>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderRadius: "10px",
            // display: "grid",
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
                borderRadius: "16px",
                height: "70px",
                width: "240px",
                padding: "6px",
                border: `1px solid ${item.borderColor}`,
              }}
            >
              <Box>
                <img src={item.image} alt={item.name} width={42} height={42} />
              </Box>
              <Box sx={{ display: "flex", gap: "26px" }}>
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

export default HealthBenefits;
