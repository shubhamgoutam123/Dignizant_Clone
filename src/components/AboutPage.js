import { Typography, Grid } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import FooterPage from "./FooterPage";
import CopyRightPage from "./CopyRightPage";
const styles = {
  gradientColor: {
    background: "linear-gradient(to bottom ,#fff, #03a9f4)",
    width: "100%",
    height: "auto",
    paddingBottom: "58px",
    
  },
  mainHeader:{
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
    color:"#455a64",
    backgroundColor:"#d7ccc8"
  },
  ourList:{
    color: "#2791cb",
    fontWeight: 700,
    marginTop: "50px",
    textAlign: "justify",
    
  }
};
const AboutPage = () => {
  return (
    <>
      <Box style={styles.gradientColor}>
        <br />
        <Box textAlign="center" mt={11}>
          <Typography
            variant="h4"
            fontSize="69px"
            fontWeight="bolder"
            color="white"
          >
            About Us
          </Typography>
        </Box>
       </Box>
       <Box textAlign="center">
        <Typography variant="h4" fontWeight="bolder" color="#455a64" mt={8}>
          WELCOME TO DIGNIZANT TECHNOLOGIES
        </Typography>
        <Box>
          <Container>
            <Typography variant="h5" mt={3} color="#90a4ae" textAlign="justify">
              We welcome you at our official website. Here you can find
              everything about digizant. Here you can find all great minds under
              one roof. Our team is highly adaptive and responsive to the newest
              technology and changing requirements. We have professionals who
              know exactly what is required for your business to grow. We pay
              high attention to all the factors that can be a game changer for
              your business. High quality deliverables have always been our main
              focus. The market is growing day by day, new technologies are
              becoming part of the market so we make sure that whatever we
              deliver will help you grow rapidly.
            </Typography>
          </Container>
        </Box>

        <Box textAlign="center">
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h4"
                fontWeight="bolder"
                color="#455a64"
                textAlign="justify"
                mt={12}
              >
                OUR MISSION
              </Typography>
              <Typography
                variant="h5"
                mt={3}
                color="#90a4ae"
                textAlign="justify"
              >
                To make you our next satisfied client through our high-end
                quality services. To make business management easy for our
                clients. To bring the change by continuously adopting best
                industry practices and standards. To create impact in the life
                of our employees and bring the most out of their potential by
                giving equal growth opportunities to everyone.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box mt={15} style={{ width: "100%", height: "500px" }}>
                <img src=" https://www.dignizant.com/img/image_one.4debd8c0.png" />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box textAlign="center">
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
           <Box style={{paddingRight:"100px"}}>
           <Grid item xs={12} sm={6} md={4}>
              <Box  style={{ width: "100%", height: "500px", }}>
                <img src="https://www.dignizant.com/img/images_two.d3d677c2.png" />
              </Box>
            </Grid>
           </Box>
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h4"
                fontWeight="bolder"
                color="#455a64"
                textAlign="justify"
                mt={12}
              >
                OUR VISION
              </Typography>
              <Typography
                variant="h5"
                mt={3}
                color="#90a4ae"
                textAlign="justify"
              >
                To make you our next satisfied client through our high-end
                quality services. To make business management easy for our
                clients. To bring the change by continuously adopting best
                industry practices and standards. To create impact in the life
                of our employees and bring the most out of their potential by
                giving equal growth opportunities to everyone.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box style={styles.mainHeader}>
       <Box>
       <Typography variant="h3" style={{ fontWeight: "bolder" }}>
          Why Choose Us?
        </Typography>
       </Box>

        <Container mt={7}>
          <Grid container style={styles.ourList}>
            <Grid item xs={12} sm={4}>
              <li style={{ fontSize: "21px" }}>We know the game</li>
              <li style={{ fontSize: "21px" }}>Quality is our agenda</li>
              <li style={{ fontSize: "21px" }}>Responsive to your needs</li>
            </Grid>
            <Grid item xs={12} sm={4}>
              <li style={{ fontSize: "21px" }}>
                Take difficulties as challenges
              </li>
              <li style={{ fontSize: "21px" }}>Passionate about work</li>
              <li style={{ fontSize: "21px" }}>On time delivery</li>
            </Grid>
            <Grid item xs={12} sm={4}>
              <li style={{ fontSize: "21px" }}>Commitment to work</li>
              <li style={{ fontSize: "21px" }}>
                Trouble-free customer service
              </li>
              <li style={{ fontSize: "21px" }}>Custom made solutions</li>
            </Grid>
          </Grid>
         
        </Container>
        <FooterPage/>
        </Box>
         
      </Box>
     
    </>
  );
};

export default AboutPage;
