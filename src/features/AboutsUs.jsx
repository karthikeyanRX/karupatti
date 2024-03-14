import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import aboutImage from "../features/image/aboutImage.jpg";
const AboutsUs = () => {
  return (
    // <Box>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       gap: "30px",
    //       marginTop: "3rem",
    //       flexWrap: "wrap",
    //     }}
    //   >
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} display={"flex"} justifyContent="center" mt={5}>
        <img src={aboutImage} alt={aboutImage} width={"100%"} />
      </Grid>

      <Grid item xs={12} md={4} display={"flex"} justifyContent="center" mt={5}>
        <Box mt={3} textAlign="justify">
          <Typography sx={{ fontWeight: "bold" }}>About Us</Typography>
          <p>
            Best karupatti makers was founded in the year 2015 by a group of
            visionaries with an idea to bring natural, healthy and traditional
            food products to the forefront. We at Bkm believe in the best. Our
            flagship product vertical is palm jaggery popularly known as
            karupatti and we are proud to offer our services to over a few
            thousand customers across the globe
          </p>
          <p>
            As the awareness towards natural foods is increasing, the demand on
            karupatti is only growing by the day and so we have a need to adapt
            to our customer needs in form and presentation which we are happy to
            do since we believe in customer is king’.
          </p>
        </Box>
      </Grid>
    </Grid>

    //   </Box>
    // </Box>
  );
};
export default AboutsUs;
