import { useEffect, useState } from "react";
import BestSellerCards from "../features/BestSallerCards";
import {
  belowStoreDatas,
  cardDatas,
  coldPressedOillDatas,
  naturalOilDatas,
} from "./CardDatas";
import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

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

  const responsiveCard = {
    ml: { xs: 7, sm: 12, md: 8, lg: 12, xl: 22 },
    mr: { xs: 3, sm: 5, md: 8, lg: 19, xl: 19 },
  };
  const handleShowAnotherComponent = () => {
    props.setShowAnotherComponent(true);
  };
  return (
    <div>
      <Box sx={responsiveCard}>
        <Box>
          <ThemeProvider theme={theme}>
            <Typography variant="h3">Best Sellers</Typography>
          </ThemeProvider>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            // justifyContent: "center",
          }}
        >
          {cardData.map((item) => {
            console.log(item, "item234");
            return (
              <Box key={item.id}>
                <BestSellerCards
                  card={item}
                  handleShowAnotherComponent={handleShowAnotherComponent}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}
