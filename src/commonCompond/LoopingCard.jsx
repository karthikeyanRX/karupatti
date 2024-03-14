import { useEffect, useState } from "react";
import BestSellerCards from "../features/BestSallerCards";
import {
  belowStoreDatas,
  cardDatas,
  coldPressedOillDatas,
  naturalOilDatas,
} from "./CardDatas";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

export default function LoopingCard(props) {
  console.log(props.checkValue, "props.checkValue");

  const [cardData, setCardData] = useState(cardDatas);

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
  useEffect(() => {
    if (props.checkValue !== "") {
      const filteredCards = cardDatas.filter((item) =>
        item.name.includes(props.checkValue)
      );
      setCardData(filteredCards);

      console.log(filteredCards, "filteredCards", props.checkValue);
    } else {
      setCardData(cardDatas);
    }
  }, [props.checkValue]);

  return (
    <div>
      <Box>
        <Box>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">Best Sellers</Typography>
          </ThemeProvider>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "29px",
            flexWrap: "wrap",
          }}
        >
          {cardData.map((item) => {
            console.log(item, "item234");
            return (
              <Box key={item.id}>
                <BestSellerCards card={item} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}
