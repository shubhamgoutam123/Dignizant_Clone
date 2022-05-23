import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {MenuItem,Menu} from "@mui/material"
import { Link } from "react-router-dom";
export default function ButtonAppBar() {

  const [open, setOpen]=React.useState(null)
   

   const  handleClose=()=>{
      setOpen(!open)
   }
   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: "white", height: "90px", paddingTop: "10px" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="data:image/png;base64,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" />
          </Typography>
          <Button
            component={Link}
            to="/"
            color="primary"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/serviespage"
            color="primary"
            
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Servies
          </Button>
          <Button
            component={Link}
            to="/aboutpage"
            color="primary"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            About_Us
          </Button>
          <Button
            component={Link}
            to="/portfolio"
            color="primary"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Portfolio
          </Button>
          <Button
            component={Link}
            to="/carrerpage"
            color="primary"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Carrer
          </Button>
          <Button
            component={Link}
            to="/contactpage"
            color="primary"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            Contact
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
