import * as React from "react";
import { Box, Button, CardActions, Grid, Typography } from "@mui/material";
import Appbar from "../features/AppBar";
import Footer from "../features/Footer";
import SuggestedProductsLoop from "../commonCompond/SuggestedProductsLoop";
import Oil from "../features/image/Oil.png";
import LikeHeart from "../features/image/LikeHeart.png";
import OilViewRating from "../features/image/OilViewRating.png";
import OilViewBuy from "../features/image/OilViewBuy.png";

const OilView = () => {
  return (
    // <Grid
    //   item
    //   xs={12}
    //   md={8.5}
    //   sm={7}
    //   lg={5.5}
    //   // lx={0}
    //   xl={4}
    //   display={"flex"}
    //   justifyContent="center"
    //   mt={5}
    // >
    <Box>
      <Appbar />
      <Box sx={{ display: "flex", flexFlow: "wrap", rowGap: "30px" }} mt={5}>
        <Box>
          <Box
            sx={{
              display: "flex",
              width: "500px",
              height: "400px",
              background: "#F3F4F5",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img src={Oil} alt={"oil"} width={300} height={300} />
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
                borderRadius: "10px",
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
                }}
              >
                <img src={Oil} alt={"oil"} width={50} height={60} />
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
                }}
              >
                <img src={Oil} alt={"oil"} width={50} height={60} />
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
                }}
              >
                <img src={Oil} alt={"oil"} width={50} height={60} />
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
                }}
              >
                <img
                  src={Oil}
                  alt={"oil"}
                  width={50}
                  height={60}
                  borderRadius={"5px"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            // flex: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              <Box>
                <Typography sx={{ color: "#6c7882", fontSize: "14px" }}>
                  <img src={OilViewBuy} alt={OilViewBuy} />{" "}
                  <img src={OilViewRating} alt={OilViewRating} />
                </Typography>
              </Box>
              <Box sx={{ marginTop: "10px" }}>
                <Typography level="h3" sx={{ fontWeight: "bold" }}>
                  Cold Pressed Sesame Oil – 1 Litre
                </Typography>
                <Box sx={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                  <Typography
                    fontSize="sm"
                    textColor="text.tertiary"
                    sx={{ fontWeight: "bold" }}
                  >
                    ₹ 340
                  </Typography>
                  <Typography
                    fontSize="sm"
                    textColor="text.tertiary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    ₹ 400
                  </Typography>
                </Box>
              </Box>
              <Typography fontWeight="bold">Description</Typography>
              <p>
                our culinary experience. Extracted from the finest sesame seeds,
                our Gingelly Oil is a treasure trove of health benefits and
                culinary versatility. Whether it's for sautéing, frying, or
                seasoning, our Gingelly Oil adds a delightful aroma and rich
                flavor to your dishes, making every meal a memorable one.
              </p>
            </Box>
            <CardActions sx={{ padding: "0px" }}>
              <Box height={50}>
                <img src={LikeHeart} alt={LikeHeart} height={50} />
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
        </Box>
      </Box>
      <Box sx={{ borderBottom: "1px solid grey", padding: "80px" }}></Box>
      <SuggestedProductsLoop />
      <Footer />
    </Box>
    // </Grid>
  );
};

export default OilView;
