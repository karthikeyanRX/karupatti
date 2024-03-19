import React from "react";
import { OilcardDatas, cardDatas } from "./OilviewCard";
import OilView from "../ProductView/OilView";
import { Box } from "@mui/material";

const OilviewLooping = () => {
  return (
    <Box>
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
