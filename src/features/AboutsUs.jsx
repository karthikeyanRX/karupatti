import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import aboutImage from "../features/image/aboutImage.jpg";
import { theme } from "../commonCompond/theme";
import styled from "@emotion/styled";
const AboutsUs = () => {
  const ResponsiveTypography = styled("div")(({ theme }) => ({
    fontSize: "14px",
    [theme.breakpoints?.down("sm")]: {
      fontSize: "13px",
    },
  }));
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4} mt={5}>
        <Box display={"flex"} flexWrap={"wrap"}>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              marginLeft: "20px",
            }}
          >
            <Grid
              item
              xs={10}
              md={8}
              sm={11}
              lg={4}
              xl={5}
              mt={5}
              borderRadius={10}
            >
              <img src={aboutImage} alt={aboutImage} Width={"100%"} />
            </Grid>

            <Grid item xs={10} md={8} sm={11} lg={4} xl={4} mt={5}>
              <Box mt={3}>
                <Typography sx={{ fontWeight: "bold" }}>About Us</Typography>
                <ResponsiveTypography>
                  Best karupatti makers was founded in the year 2015 by a group
                  of visionaries with an idea to bring natural, healthy and
                  traditional food products to the forefront. We at Bkm believe
                  in the best. Our flagship product vertical is palm jaggery
                  popularly known as karupatti and we are proud to offer our
                  services to over a few thousand customers across the globe
                </ResponsiveTypography>
                <ResponsiveTypography>
                  As the awareness towards natural foods is increasing, the
                  demand on karupatti is only growing by the day and so we have
                  a need to adapt to our customer needs in form and presentation
                  which we are happy to do since we believe in customer is
                  king’.
                </ResponsiveTypography>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};
export default AboutsUs;
