import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import { coldPressedOillDatas } from "./CardDatas";
import BestSellerCards from "../features/BestSallerCards";

const ColdPressedOilLoop = () => {
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
          Cold pressed oil(6)
        </Typography>
      </Box>
      <Box
        mt={5}
        sx={{
          display: "flex",
          // justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          borderBottom: "1px solid gray",
          paddingBottom: "80px",
          // justifyContent: "center",
        }}
      >
        {coldPressedOillDatas.map((item) => {
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

export default ColdPressedOilLoop;
