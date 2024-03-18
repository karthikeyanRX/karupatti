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
import OilView from "./ProductView/OilView";
import { useState } from "react";

const MainPage = () => {
  const [checkValue, setCheckValue] = useState("");
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  console.log(checkValue, "checkValue");
  return (
    <>
      {!showAnotherComponent ? (
        <Box>
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <Aside />
            <Appbar />
            <CategoryCards setCheckValue={setCheckValue} />
            <LoopingCard
              checkValue={checkValue}
              setShowAnotherComponent={setShowAnotherComponent}
            />
            <HealthBenefits />
            <NaturalOilStoreLoop />
            <AboutsUs />
            <BelowStoreLoop />
            <ColdPressedOilLoop />
            <SuggestedProductsLoop />
          </Box>
          <Footer />
        </Box>
      ) : (
        <OilView showAnotherComponent={showAnotherComponent} />
      )}
    </>
  );
};

export default MainPage;
