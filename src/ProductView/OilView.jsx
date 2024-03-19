import * as React from "react";
import { Box, Button, CardActions, Grid, Typography } from "@mui/material";
import Appbar from "../features/AppBar";
import Footer from "../features/Footer";
import SuggestedProductsLoop from "../commonCompond/SuggestedProductsLoop";
import Oil from "../features/image/Oil.png";
import LikeHeart from "../features/image/LikeHeart.png";
import OilViewRating from "../features/image/OilViewRating.png";
import OilViewBuy from "../features/image/OilViewBuy.png";

const OilView = ({ showAnotherComponent, card }) => {
  console.log(card, "card");
  console.log(showAnotherComponent, "showAnotherComponent");
  const responsiveCard = {
    ml: { xs: 20, sm: 20, md: 15, lg: 12, xl: 18 },
    mr: { xs: 3, sm: 5, md: 8, lg: 19, xl: 19 },
  };
  return (
    <Box sx={{ responsiveCard }}>
      {/* {showAnotherComponent && ( */}
      <Grid container spacing={4} mt={5}>
        <Box>
          <Appbar />
          <Box
            sx={{
              display: "flex",
              flexFlow: "wrap",
              rowGap: "30px",
              justifyContent: "center",
            }}
            mt={5}
          >
            <Grid
              item
              xs={10}
              md={5}
              sm={8}
              lg={5.5}
              xl={5}
              mt={5}
              borderRadius={10}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "500px",
                  height: "400px",
                  background: "#F3F4F5",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "14px",
                }}
              >
                <img
                  src={card?.MainImage}
                  alt={"oil"}
                  width={300}
                  height={300}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    marginBottom: "-400px",
                    padding: "10px",
                    cursor: "pointer",
                    gap: "5px",
                    borderRadius: "14px",
                    background: "white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid grey",
                      background: "#F3F4F5",
                      width: "60px",
                      height: "70px",
                      padding: "5px",
                      borderRadius: "10px",
                      "&:hover": {
                        background: "lightgrey",
                        border: "1px solid green",
                      },
                    }}
                  >
                    <img
                      src={card?.SubImage}
                      alt={"oil"}
                      width={50}
                      height={60}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid grey",
                      background: "#F3F4F5",
                      width: "60px",
                      height: "70px",
                      padding: "5px",
                      borderRadius: "10px",
                      "&:hover": {
                        background: "lightgrey",
                        border: "1px solid green",
                      },
                    }}
                  >
                    <img
                      src={card?.SubImage}
                      alt={"oil"}
                      width={50}
                      height={60}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid grey",
                      background: "#F3F4F5",
                      width: "60px",
                      height: "70px",
                      padding: "5px",
                      borderRadius: "10px",
                      "&:hover": {
                        background: "lightgrey",
                        border: "1px solid green",
                      },
                    }}
                  >
                    <img
                      src={card?.SubImage}
                      alt={"oil"}
                      width={50}
                      height={60}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid grey",
                      background: "#F3F4F5",
                      width: "60px",
                      height: "70px",
                      padding: "5px",
                      borderRadius: "10px",
                      "&:hover": {
                        background: "lightgrey",
                        border: "1px solid green",
                      },
                    }}
                  >
                    <img
                      src={card?.SubImage}
                      alt={"oil"}
                      width={50}
                      height={60}
                      borderRadius={"5px"}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Box
              sx={{
                display: "flex",
                // flex: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={8} md={10} sm={12} lg={12} xl={12} mt={5}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "500px",
                    height: "300px",
                    marginRight: "1rem",
                    padding: "25px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: "7px", alignItems: "center" }}
                    >
                      <Box sx={{ color: "#6c7882", fontSize: "14px" }}>
                        <img
                          src={card?.DiscountNewImage}
                          alt={card?.DiscountNewImage}
                        />
                      </Box>
                      <Box>
                        <img src={card?.Rateingimage} alt={card?.LeafImage} />
                      </Box>
                      <Box>
                        <Typography>{card?.RateingKarupatti}</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ marginTop: "10px" }}>
                      <Typography level="h3" sx={{ fontWeight: "bold" }}>
                        {card?.Heading}
                      </Typography>
                      <Box
                        sx={{ display: "flex", gap: "8px", marginTop: "10px" }}
                      >
                        <Typography
                          fontSize="sm"
                          textColor="text.tertiary"
                          sx={{ fontWeight: "bold" }}
                        >
                          {card?.price}
                        </Typography>
                        <Typography
                          fontSize="sm"
                          textColor="text.tertiary"
                          sx={{ textDecoration: "line-through" }}
                        >
                          ₹{card?.oldPrice}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography fontWeight="bold">
                      {card?.Describtion}
                    </Typography>
                    <p>{card?.Title}</p>
                  </Box>
                  <CardActions sx={{ padding: "0px" }}>
                    <Box height={50}>
                      <img src={card?.Hearts} alt={card?.Hearts} height={50} />
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#2C9763",
                        width: "226px",
                        height: "50px",
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
              </Grid>
            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid grey", padding: "80px" }}></Box>
          <SuggestedProductsLoop />
          <Footer />
        </Box>
        {/* )} */}
      </Grid>
    </Box>
  );
};

export default OilView;
