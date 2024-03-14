import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import { coldPressedOillDatas } from "./CardDatas";
import BestSellerCards from "../features/BestSallerCards";

const ColdPressedOilLoop = () => {
  const theme = createTheme();
  theme.typography.h3 = {
    // marginLeft: "13rem",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600px",
    fontSize: "28px",
    VerticalTrim: "Cap height",
    lineHeight: "44.07px",
    marginBottom: "2rem",
    marginTop: "2rem",
  };
  return (
    <Box>
      <Box>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">Cold pressed oil(6)</Typography>
        </ThemeProvider>
      </Box>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          gap: "29px",
          flexWrap: "wrap",
          borderBottom: "1px solid gray",
          paddingBottom: "80px",
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
