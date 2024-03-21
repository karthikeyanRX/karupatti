import { useEffect, useState } from "react";
import BestSellerCards from "../features/BestSallerCards";
import { cardDatas } from "./CardDatas";
import { Box, Grid, Typography } from "@mui/material";

export default function LoopingCard(props) {
  console.log(props.checkValue, "props.checkValue");

  const [cardData, setCardData] = useState(cardDatas);
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

  const handleShowAnotherComponent = () => {
    props.setShowAnotherComponent(true);
  };
  return (
    <Box>
      <Typography
        style={{
          marginTop: "4rem",
          fontSize: "clamp(1rem, 2vw, 1.5rem)",
          fontWeight: "bold",
        }}
      >
        Best Sellers
      </Typography>

      <Grid spacing={2} container mt={2}>
        {cardData.map((item) => {
          return (
            <Grid item xs={12} md={4} lg={3} sm={6}>
              <BestSellerCards
                card={item}
                handleShowAnotherComponent={handleShowAnotherComponent}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
