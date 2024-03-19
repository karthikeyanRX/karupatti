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
import styled from "@emotion/styled";
import { theme } from "../commonCompond/theme";

// const theme = createTheme();

// theme.typography.h3 = {
//   fontWeight: "600px",
//   fontSize: "28px",
//   lineHeight: "44.07px",
//   marginBottom: "2rem",
//   marginTop: "3rem",
// };

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
const ResponsiveAppBarPadding = {
  ml: { xs: 7, sm: 12, md: 8, lg: 12, xl: 22 },
  mr: { xs: 3, sm: 5, md: 8, lg: 19, xl: 19 },
};
const ResponsiveTypography = styled("div")(({ theme }) => ({
  fontSize: "14px",
  [theme.breakpoints?.down("sm")]: {
    fontSize: "13px",
  },
}));
function HealthBenefits() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={ResponsiveAppBarPadding}
        // sx={{
        //   display: "flex",
        //   justifyContent: "center",
        //   flexDirection: "column",
        //   alignItems: "center",
        // }}
      >
        <Typography variant="h3" mt={6} fontWeight={600}>
          Health benefits
        </Typography>

        <Box
          mt={5}
          sx={{
            gap: "20px",
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "center",
          }}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                // alignItems: "center",
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
                    <CardContent display="flex" flexWrap="wrap" fontSize="12px">
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
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default HealthBenefits;
