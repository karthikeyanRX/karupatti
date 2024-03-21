import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { belowStoreDatas } from "./CardDatas";
import BestSellerCards from "../features/BestSallerCards";

const BelowStoreLoop = () => {
  return (
    <Box>
      <Typography variant="h5" mt={6} fontWeight={600}>
        Below 100 store
      </Typography>

      <Grid spacing={2} container mt={2}>
        {belowStoreDatas.map((item) => {
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

export default BelowStoreLoop;
