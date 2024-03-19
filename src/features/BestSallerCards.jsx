import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LikeHeart from "../features/image/LikeHeart.jpg";
import OilView from "../ProductView/OilView";

const BestSellerCards = (props) => {
  // const isSmallScreen = useMediaQuery("(max-width:600px)");
  const handleCardClick = () => {
    props.handleShowAnotherComponent();
    console.log(props.handleShowAnotherComponent, "CLICKED");
  };
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              // height: "337px",
              width: "254px",
              borderRadius: "20px",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              // width: isSmallScreen ? "80%" : "100%",
            }}
            onClick={handleCardClick}
          >
            <Box
              sx={{
                backgroundColor: "#F3F4F5",
                borderRadius: "10px",
                height: "200px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px",
                }}
              >
                <Box>
                  <img
                    src={props?.card?.DiscountNewImage}
                    alt={props?.card?.DiscountNewImage}
                    width={60}
                  />
                </Box>
                <Box>
                  <img
                    src={props?.card?.LeafImage}
                    alt={props?.card?.LeafImage}
                    width={26}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={props?.card?.karupattiLargeImage}
                  alt={props?.card?.karupattiLargeImage}
                  width={130}
                  height={130}
                />
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box>
                  <img
                    src={props?.card?.RateingKarupatti}
                    alt={props?.card?.RateingKarupatti}
                    width={40}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "#6c7882", fontSize: "10px" }}>
                    {props?.card?.Rating}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: "3px" }}>
                <Typography sx={{ fontSize: "13px" }}>
                  {props?.card?.name}
                </Typography>
                <Box sx={{ display: "flex", gap: "5px", marginTop: "3px" }}>
                  <Typography
                    // fontSize="sm"
                    textColor="text.tertiary"
                    sx={{ fontWeight: "bold" }}
                  >
                    ₹ {props?.card?.price}
                  </Typography>
                  <Typography
                    // fontSize="sm"
                    textColor="text.tertiary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    ₹ {props?.card?.oldPrice}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "3px" }}>
              <Box>
                <img src={LikeHeart} alt={LikeHeart} width={40} />
              </Box>
              <CardActions sx={{ padding: "0px" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#2C9763",
                    width: "197px",
                    height: "42px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    size: "20px",
                    "&:hover": {
                      background: "#2C9763",
                    },
                  }}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Box>
          </Card>
          {/* </Grid> */}
        </Box>
      </Box>
    </Box>
  );
};

export default BestSellerCards;
