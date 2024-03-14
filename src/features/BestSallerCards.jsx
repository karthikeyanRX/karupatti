import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import LikeHeart from "../features/image/LikeHeart.jpg";

const BestSellerCards = (props) => {
  return (
    <Grid item lg={4} md={4} sm={6} xs={12} xl={4}>
      <Card
        variant="solid"
        color="primary"
        invertedColors
        sx={{
          overflow: "auto",
          // height: "488px",
          borderRadius: "20px",
          padding: "10px",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={props?.card?.karupattiLargeImage}
            alt={props?.card?.karupattiLargeImage}
            width={170}
            height={140}
          />
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
              <Typography sx={{ color: "#6c7882", fontSize: "14px" }}>
                {props?.card?.Rating}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Typography level="h2">{props?.card?.name}</Typography>
            <Box sx={{ display: "flex", gap: "8px", marginTop: "10px" }}>
              <Typography
                fontSize="sm"
                textColor="text.tertiary"
                sx={{ fontWeight: "bold" }}
              >
                ₹ {props?.card?.price}
              </Typography>
              <Typography
                fontSize="sm"
                textColor="text.tertiary"
                sx={{ textDecoration: "line-through" }}
              >
                ₹ {props?.card?.oldPrice}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Box>
            <img src={LikeHeart} alt={LikeHeart} />
          </Box>
          <CardActions sx={{ padding: "0px" }}>
            <Button
              variant="contained"
              sx={{
                background: "#2C9763",
                width: "226px",
                height: "54px",
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
    </Grid>
  );
};

export default BestSellerCards;
