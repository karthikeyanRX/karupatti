import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import { naturalOilDatas } from "./CardDatas";
import BestSellerCards from "../features/BestSallerCards";

const NaturalOilStoreLoop = () => {
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
          <Typography variant="h3">Natural oil store</Typography>
        </ThemeProvider>
      </Box>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          gap: "29px",
          flexWrap: "wrap",
        }}
      >
        {naturalOilDatas.map((item) => {
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

export default NaturalOilStoreLoop;
