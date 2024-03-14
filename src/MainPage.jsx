import React, { useState } from "react";
import CategoryCards from "./features/CategoryCards";
import LoopingCard from "./commonCompond/LoopingCard";
import HealthBenefits from "./features/HealthBenefits";
import NaturalOilStoreLoop from "./commonCompond/NaturalOilStoreLoop";
import AboutsUs from "./features/AboutsUs";
import BelowStoreLoop from "./commonCompond/BelowStoreLoop";
import ColdPressedOilLoop from "./commonCompond/ColdPressedOilLoop";
import SuggestedProductsLoop from "./commonCompond/SuggestedProductsLoop";
import Footer from "./features/Footer";
import Appbar from "./features/AppBar";
import { Box, Grid } from "@mui/material";
import Aside from "./features/Aside";

const MainPage = () => {
  const [checkValue, setCheckValue] = useState("");
  console.log(checkValue, "checkValue");
  return (
    <Box>
      <Grid item lg={4} md={4} sm={6} xs={12} xl={4}>
        <Aside />
        <Appbar />
        <CategoryCards setCheckValue={setCheckValue} />
        <LoopingCard checkValue={checkValue} />
        <HealthBenefits />
        <NaturalOilStoreLoop />
        <AboutsUs />
        <BelowStoreLoop />
        <ColdPressedOilLoop />
        <SuggestedProductsLoop />
        <Footer />
      </Grid>
    </Box>
  );
};

export default MainPage;
