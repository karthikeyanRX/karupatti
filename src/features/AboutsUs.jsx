import { Box, Grid, Typography, responsiveFontSizes } from "@mui/material";
import React from "react";
import aboutImage from "../features/image/aboutImage.jpg";
const AboutsUs = () => {
  const responsiveimage = {
    ml: { xs: 11, sm: 16, md: 12, lg: 16, xl: 26 },
    mr: { xs: 3, sm: 5, md: 8, lg: 19, xl: 19 },
  };
  return (
    <Grid container spacing={4} mt={5}>
      <Box sx={responsiveimage} display={"flex"} flexWrap={"wrap"}>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            // justifyContent: "center",
            flexWrap: "wrap",
            // marginLeft: "2.5%",
            // marginRight: "3%",
          }}
        >
          <Grid
            item
            xs={11}
            md={8}
            sm={11}
            lg={5}
            xl={5}
            mt={5}
            borderRadius={10}
          >
            <img
              src={aboutImage}
              alt={aboutImage}
              Width={"100%"}
              // border-radius={"10px"}
            />
          </Grid>

          <Grid item xs={11} md={8} sm={11} lg={5} xl={4} mt={5}>
            <Box mt={3}>
              <Typography sx={{ fontWeight: "bold" }}>About Us</Typography>
              <p>
                Best karupatti makers was founded in the year 2015 by a group of
                visionaries with an idea to bring natural, healthy and
                traditional food products to the forefront. We at Bkm believe in
                the best. Our flagship product vertical is palm jaggery
                popularly known as karupatti and we are proud to offer our
                services to over a few thousand customers across the globe
              </p>
              <p>
                As the awareness towards natural foods is increasing, the demand
                on karupatti is only growing by the day and so we have a need to
                adapt to our customer needs in form and presentation which we
                are happy to do since we believe in customer is king’.
              </p>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};
export default AboutsUs;
