import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { coldPressedOillDatas } from "./CardDatas";
import BestSellerCards from "../features/BestSallerCards";

const ColdPressedOilLoop = () => {
  return (
    <Box>
      <Typography variant="h5" mt={6} fontWeight={600}>
        Cold pressed oil(6)
      </Typography>

      <Grid spacing={2} container mt={2}>
        {coldPressedOillDatas.map((item) => {
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

export default ColdPressedOilLoop;
