import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import aboutImage from "../features/image/aboutImage.jpg";
const AboutsUs = () => {
  return (
    <Grid item lg={4} md={4} sm={6} xs={12} xl={4}>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            // justifyContent: "center",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          <img src={aboutImage} alt={aboutImage} style={{ width: "600px" }} />

          <Box sx={{ lineHeight: " 25px", width: "532px" }}>
            <Typography sx={{ fontWeight: "bold" }}>About Us</Typography>
            <p>
              Best karupatti makers was founded in the year 2015 by a group of
              visionaries with an idea to bring natural,healthy and traditional
              food products to the forefront.we at Bkm believe in the best.our
              flagship product vertical is palm jaggery popularly known as
              karupatti and we are proud to offer our services to over a few
              thousand customers across the globe.
            </p>
            <p>
              BAs the awareness towards natural foods is increasing, the demand
              on karupatti is only growing by the day and so we have a need to
              adapt to our customer needs in form and presentation which we are
              happy to do since we believe in customer is king’.karupatti is
              only growing by the day and so we have a need to adapt to our
              customer needs in form and presentation which we are happy to do
              since we believe in customer is king’.
            </p>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
export default AboutsUs;
