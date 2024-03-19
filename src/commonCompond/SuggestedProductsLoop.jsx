import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import { SuggestedProductsData } from "./CardDatas";
import BestSellerCards from "../features/BestSallerCards";

const SuggestedProductsLoop = () => {
  // const theme = createTheme();
  // theme.typography.h3 = {
  //   // marginLeft: "13rem",
  //   fontFamily: "'Poppins', sans-serif",
  //   fontWeight: "600px",
  //   fontSize: "28px",
  //   VerticalTrim: "Cap height",
  //   lineHeight: "44.07px",
  //   marginBottom: "2rem",
  //   marginTop: "2rem",
  // };
  const ResponsiveAppBarPadding = {
    ml: { xs: 7, sm: 12, md: 8, lg: 12, xl: 22 },
    mr: { xs: 3, sm: 5, md: 8, lg: 19, xl: 19 },
  };
  return (
    <Box sx={ResponsiveAppBarPadding}>
      <Box>
        <Typography variant="h5" mt={6} fontWeight={600}>
          Suggested products
        </Typography>
      </Box>
      <Box
        mt={5}
        sx={{
          display: "flex",
          // justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          // justifyContent: "center",
        }}
      >
        {SuggestedProductsData.map((item) => {
          console.log(item, "item ");
          return (
            <Box>
              <BestSellerCards card={item} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SuggestedProductsLoop;
