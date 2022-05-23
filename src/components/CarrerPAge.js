import React from "react";
import { Box, Typography } from "@mui/material";
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
    marginTop: "40px",
    fontWeight: "bolder",
    paddingRight:'53px',

  },
  
};

const CarrerPAge = () => {
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
            Current Job Openings
          </Typography>
        </Box>
      </Box>
      <Box style={Styles.header}>
        <Box style={Styles.boxA}>
        <Typography variant="h4" >
          WE ARE NOW HIRING FOR BELOW POSITIONS
        </Typography>
        </Box>
      </Box>
      <Box>
         <FooterPage/>
      </Box>
    </>
  );
};

export default CarrerPAge;
