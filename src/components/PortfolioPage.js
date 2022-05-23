import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Container, fontWeight, textAlign } from "@mui/system";
import FooterPage from "./FooterPage";
const Styles = {
  container: {
    background: "linear-gradient(to bottom ,#fff, #03a9f4)",
    width: "100%",
    height: "30vh",
    paddingBottom: "23px",
  },
  header: {
    width: "100%",
    textAlign: "center",
  },
  boxA: {
    marginTop: "100px",
    fontWeight: "bolder",
  },
  textPara: {
    textAlign: "center",

    marginTop: "23px",
  },
  copyPage:{
    backgroundColor:"black",
    width:"100%",
    fontSize:"23px",
    textAlign:"center"
  }
};

const PortfolioPage = () => {
  return (
    <>
      <Box style={Styles.container}>
        <Box textAlign="center" mt={4}>
          <Typography
            variant="h4"
            fontSize="69px"
            fontWeight="bolder"
            color="white"
            style={{ paddingTop: "100px" }}
          >
            Portfolio
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box style={Styles.header}>
          <Box style={Styles.boxA}>
            <Typography variant="h4" fontWeight="bolder" color="#37474f">
              OUR LATEST WORK IN DIFFERENT TECHNOLOGIES
            </Typography>
          </Box>
          <Box style={Styles.textPara}>
            <Typography variant="h6" fontSize="28px"  color="#b0bec5" textAlign="justify">
              We don’t have much to say, our portfolio speaks it all. It is
              crafted by our skilled employees with care. It contains 
              projects from diverse technologies and domains. Please have a
              look.
            </Typography>
          </Box>
        </Box>
         <Box mt={6}>
         <Divider/>
         </Box>
      </Container>
       <Box>
       <FooterPage/>
       <Box style={Styles.copyPage}>
          <Typography variant="h6" p={2}  color="white">@ Copyright | Dignizant Technologies. All rights reserved</Typography>
       </Box>
       </Box>
    </>
  );
};

export default PortfolioPage;
