import React from "react";
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
import HealthBenifitArrowImage from "../features/image/HealthBenifitArrowImage.png";
import HealthBenififGroupImage from "../features/image/HealthBenififGroupImage.png";
import HealthBenifitvitaminImage from "../features/image/HealthBenifitvitaminImage.png";
import HeathBeniftshealthcareImage from "../features/image/HeathBeniftshealthcareImage.png";

import HealthBeniftAromaImage from "../features/image/HealthBeniftAromaImage.png";
import HealthBenifitAgeGroupImage from "../features/image/HealthBenifitAgeGroupImage.png";
import HealthBenifitsLeavesImage from "../features/image/HealthBenifitsLeavesImage.png";
import HealthBinifitLeafImage from "../features/image/HealthBinifitLeafImage.png";
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
    name: "Low glycemic",
    price: "Healthy substitute",
    image: HealthBenifitArrowImage,
  },
  {
    name: "High load of minerals",
    price: "Fe, Ca, Mg, B-complex, B12",
    image: HealthBenififGroupImage,
  },
  {
    name: "Source of vitamin B12",
    price: "Enriched vitamin B12",
    image: HealthBenifitvitaminImage,
  },
  {
    name: "Medicinal properties",
    price: "Healthy substitute",
    image: HeathBeniftshealthcareImage,
  },

  {
    name: "Has great taste & aroma",
    price: "chocolate & caramel flavour",
    image: HealthBeniftAromaImage,
  },
  {
    name: "Consumed by all age groups",
    price: "Good for children",
    image: HealthBenifitAgeGroupImage,
  },
  {
    name: "Eco-friendly",
    price: "sustainable source of sweetner",
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
      <Grid item lg={12} md={8} sm={6} xs={4} xl={4}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">Health benefits</Typography>
        </ThemeProvider>
        <Box
          sx={
            {
              // display: "flex",
              // justifyContent: "center",
              // marginBottom: "2rem",
              // flexWrap: "wrap",
            }
          }
        >
          <Box
            sx={{
              // width: "100%",
              // borderRadius: "07p",
              // display: "grid",
              // width: "fit-content",
              gap: "25px",
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
                  // gap: "8px",
                  alignItems: "center",
                  borderRadius: "16px",
                  height: "70px",
                  width: "271px",
                  paddingX: "4px",
                  border: `1px solid ${item.borderColor}`,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ paddingLeft: "8px" }}>
                    <img src={item.image} alt={item.name} width={35} />
                  </Box>
                  <Box>
                    <Box>
                      <CardContent
                        display="flex"
                        flexWrap="wrap"
                        // sx={{ paddingBottom: "0px" }}
                        fontSize="12px"
                      >
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
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default HealthBenefits;
