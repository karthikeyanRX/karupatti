import {
  Box,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { naturalOilDatas } from "./CardDatas";
import BestSellerCards from "../features/BestSallerCards";

const NaturalOilStoreLoop = () => {
  return (
    <Box>
      <Typography variant="h5" mt={6} fontWeight={600}>
        Natural oil store
      </Typography>
      <Grid spacing={2} container mt={2}>
        {naturalOilDatas.map((item) => {
          return (
            <Grid item xs={12} md={4} lg={3} sm={6}>
              <BestSellerCards card={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default NaturalOilStoreLoop;
