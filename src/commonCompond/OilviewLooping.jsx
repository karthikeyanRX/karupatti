import React from "react";
import { OilcardDatas, cardDatas } from "./OilviewCard";
import OilView from "../ProductView/OilView";
import { Box } from "@mui/material";
const responsiveCard = {
  ml: { xs: 20, sm: 20, md: 20, lg: 12, xl: 22 },
  mr: { xs: 3, sm: 5, md: 8, lg: 19, xl: 19 },
};

const OilviewLooping = () => {
  return (
    <Box
      sx={{
        responsiveCard,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {OilcardDatas.map((item) => {
        console.log(item, "itemdhdhbfdb");
        return (
          <Box>
            <OilView card={item} />
          </Box>
        );
      })}
    </Box>
  );
};

export default OilviewLooping;
