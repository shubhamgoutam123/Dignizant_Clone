import React from "react";

import {
  Grid,
  Box,
  Container,
  Typography,
 
  IconButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
const FooterPage = () => {
  return (
    <>
      <Box bgcolor="#01579b" height="auto" mt={12} textAlign="center">
        <Container>
          <Grid container pt={3}>
            <Grid item xs={12} sm={4} md={4} >
              <Typography fontSize="38px" fontWeight="bolder" color="white">Conatct Us</Typography>
              <Typography textAlign="center">
                <Box display="flex" style={{ textAlign: "justify" }} mt={3}>
                  <Box>
                    <IconButton mt={3}>
                      <IconButton>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAyCAMAAAADUYksAAAAllBMVEUAAAA+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4bhiT5AAAAMXRSTlMA8OSo9NjFDwU6JrSiaPm7QhXb0sqekIqGLyrez6+WdWRZUjUfGr646uCAXk5ICm4HoRGcCwAAAidJREFUOMuFlNd26jAQRSUXisEmBkMKkAAhkIRQ9v//3JW0Ro6MvW72A0Lj0ZSjokL6u8VoFkWz0WJbqm7e55qaJB52uHzEWKLVZFJ9YVln9z7bBDhuxJ6dRkCRN30egfFzaMlegdfQEsPXsFVjamL/ThfQ66sWg5EJ7yc746M6MV65qAOfA7E+fx/Sae+xTr2EvS/oXTn2McJImsgkyQvEkrYApodJiiGv27Zhxz7iD7BwEbInYONrOSh1K8yvkxx4qNtP4NkXU5r1EnkiPtIBrHz83GqUSWlzFWAyDl2+gthIEXnjPnS6FCLkjEqlErbHVDWoxDDhS02Z2L8yBsxF4rlJtZSPS473TvrmnSpSSWdGj8/vP4zhw0kro2eQELtRM1Ib2NrJEBah0xuc7fgA36qEtbOu4OXXpyxMU5ZXZz5AX9TUtdfH0uuvXa07eHPTHIq30ql81TaJZQtXO36K5rY8kmodVxq/0BRRXOx4hZPsfQ9hZnJJ2QvfbFQf93Gq9TLe+vkMyrrbTfAgBPfmHFw9TTJQXURQL9kEC+4E/W6syNo+fRoZHjqv51ra9hzhJ5zLbs4ahhL0fe3LcDP9nsSt1+jpPvhKjkZwp6Jw7m+9vjUl6ng1n/zB8sdorjpIYRto8tm5CXvq3RxoeY7a5FD5F8531uYo33KRsZNL4lrKkOvVzRkS1/2paW/JvB4HD3M3PcBf+P+WxV79wRB26k8e2wX9AzZrTW4FAJHGAAAAAElFTkSuQmCC" />
                      </IconButton>
                    </IconButton>
                  </Box>
                  <Box>
                    <span style={{ color: "white" }}>
                      521-522-523, 5th floor Amby-Vally Arcade, Nr Manisha
                      Garnala, Opp Santosa Heights, Utran, Surat- 394105,
                      Gujarat, India.
                    </span>
                  </Box>
                </Box>

                <Box display="flex" style={{ textAlign: "justify" }} mt={3}>
                  <Box>
                    <IconButton mt={3}>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAyCAMAAAADUYksAAAAllBMVEUAAAA+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4bhiT5AAAAMXRSTlMA8OSo9NjFDwU6JrSiaPm7QhXb0sqekIqGLyrez6+WdWRZUjUfGr646uCAXk5ICm4HoRGcCwAAAidJREFUOMuFlNd26jAQRSUXisEmBkMKkAAhkIRQ9v//3JW0Ro6MvW72A0Lj0ZSjokL6u8VoFkWz0WJbqm7e55qaJB52uHzEWKLVZFJ9YVln9z7bBDhuxJ6dRkCRN30egfFzaMlegdfQEsPXsFVjamL/ThfQ66sWg5EJ7yc746M6MV65qAOfA7E+fx/Sae+xTr2EvS/oXTn2McJImsgkyQvEkrYApodJiiGv27Zhxz7iD7BwEbInYONrOSh1K8yvkxx4qNtP4NkXU5r1EnkiPtIBrHz83GqUSWlzFWAyDl2+gthIEXnjPnS6FCLkjEqlErbHVDWoxDDhS02Z2L8yBsxF4rlJtZSPS473TvrmnSpSSWdGj8/vP4zhw0kro2eQELtRM1Ib2NrJEBah0xuc7fgA36qEtbOu4OXXpyxMU5ZXZz5AX9TUtdfH0uuvXa07eHPTHIq30ql81TaJZQtXO36K5rY8kmodVxq/0BRRXOx4hZPsfQ9hZnJJ2QvfbFQf93Gq9TLe+vkMyrrbTfAgBPfmHFw9TTJQXURQL9kEC+4E/W6syNo+fRoZHjqv51ra9hzhJ5zLbs4ahhL0fe3LcDP9nsSt1+jpPvhKjkZwp6Jw7m+9vjUl6ng1n/zB8sdorjpIYRto8tm5CXvq3RxoeY7a5FD5F8531uYo33KRsZNL4lrKkOvVzRkS1/2paW/JvB4HD3M3PcBf+P+WxV79wRB26k8e2wX9AzZrTW4FAJHGAAAAAElFTkSuQmCC" />
                    </IconButton>
                  </Box>
                  <Box>
                    <span style={{ color: "white" }} >
                      606/607, White Orchid, LP Savani Rd, near Shell Petrol
                      Pump, Adajan Gam, Surat, Gujarat 395009
                    </span>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ textAlign: "justify" }}
                  mt={4}
                >
                  <Box>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAvCAMAAABADLOjAAAAilBMVEUAAAA/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO/L9W36AAAALXRSTlMABPb68Ssl69yvNjHHqJ0Ufh0Z5c1JQQqS4tPBuHRqVU88u6KWjW1lWw7WtAxdrFbbAAAByklEQVRIx42U2ZKCMBBFQ8K+CSLivu/j+f/fm6mRUIhKvE9N10nSud1BGGWJbzUsT0niJ1k5MLOrqU2t+FL1ooOffyo4r7bn1Fdy37O9GwCjlWvVS09Tdp9r8CAZtjOhZPOe3dqoRdTxImMWvYNPElm+3mNB8AaOYf/WTYnTzTkK+0OBO1adTOhhO+/hMbjPmQhm4iM8ecmkQit3TmVYNYfCz8flVph6APPaNUcy79QMiTZ5D7YKYpsi/D/H61bowkLHNwgcYYlBTDEW4lpwe4YrD1/HBUVe92SOfxEeo87Mj7B1PMXLm7sm2K9GZVA162TL2OvRJr6+GL2p4ZjnDlvuy9vzGjeTGu7RBKkjMzyE7SNaQigM8nWj1rAxwRE8XtUdlsKkqZ6lAzMj7KIGj3ZKXCO9I9Az6BnhShFpQw5GeoNsxvRopG9kzaxMLAN8t5t+rFXhmBxRqtItDfCH/XTZmvTcZ9SPZwStg/7wbT89aQ/BDq+v9gNJ+zOPOffQS9K2bVZB2UOf8Z//sLJ/phiIRnPU1TivWgtkLnp1kUpXGiCN7yzFXuvnPhZGLZQKImEdYS2+0NKHNIWL+ErRQdLsbJa1zY53M/YLR0Us3kMEkpIAAAAASUVORK5CYII=" />
                  </Box>
                  <Box>
                    <span style={{ color: "white", marginLeft: "12px" }}>
                      7895712566
                    </span>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  style={{ textAlign: "justify" }}
                  mt={4}
                  mb={5}
                >
                  <Box>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAbCAMAAADWDFZiAAAAe1BMVEUAAAA/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8/vO8iFBdIAAAAKHRSTlMARWZrVxXYSvFc4KBPP+eRizgwDfrRrnomtaWWcR72zMS7g35iENkLOI5B2gAAAP9JREFUOMuF0dtygjAYReFtlZIgohwEPJ/b9f5P2OqUaAXCuv5mZ/6JEgzDGRIBVfzhz14BFdcy0lCrpd2LUEt2XvcLlCG20oHaBz8JZBFjSScy32IgTf6kVqR9MCLXi9SUsOfpIpCTPhrxrTepBbb7mJbUhY9O2Jbasm3DTqmY6hUeklw98gbn18VYPTJjHrNxV5sFs26ZUkozpnr0Ra4Noy6ZspbudPU8Zk7Ylm4s49TAO43fZdpAqaY8Frn7j/C/DNnItYObms5YJ93TruCx6FbjpwyZq78K20g/lC7Yh0wzFvJXMdohs96PNdSEtREc69looLoEJSYqGCwyyQ+oICYBxnPcZwAAAABJRU5ErkJggg==" />
                  </Box>
                  <Box>
                    <span style={{ color: "white", marginLeft: "12px" }}>
                      info@dignizant.com
                    </span>
                  </Box>
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sn={4} md={4}>
              <Typography fontSize="38px" fontWeight="bolder" color="white">Our Services</Typography>
              <Box mt={4} mb={3}>
                <IconButton href="https://www.facebook.com/dignizant/">
                  <FacebookRoundedIcon
                    style={{ fontSize: "56px", color: "#81d4fa" }}
                  />
                </IconButton>
                <IconButton href="https://twitter.com/dignizant">
                  <TwitterIcon  style={{ fontSize: "56px", color: "#81d4fa" }} />
                </IconButton>
                <IconButton href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGXK53AWbBCRQAAAYDhOnPQupDCDxywfuftDJvTPKZBotiJ0EVBUmO_llXLAF02-FhLV1Lk_VHtKfuLFUEIjSAEMPaC936tFXA9L3yIhCruN8MjsejoG23n4B6PuAhQsnWP7Bo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdignizant-technologies%2Fabout%2F">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAhFBMVEUAAAA+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4+tO4cL8ZgAAAAK3RSTlMAWu88qgXz+A3Y6Qnhu6WQex0U3oQv5GrPyZ9lRiMaxLR0X042r4luVdOYz1BgrwAAAhVJREFUSMeVltmSgyAQRa9GEDUuSTR7zL7M8P//N6NSRIgBPE/SVaeabrpTwRBkUmyPUz/k/vS4Pd8InEi8O+UKNLja3Xnp8wHiYm7OVlD+BXo2ZN1H3EA0+aKRnFsoyWB1R24lHaj0EHEHopnuzZbcicVBu6fMZzWVnCTlzqwTvHlwQXjKM99ibiGZcMGx6Ro7WcyXnJcFF1RoYJacSybEQl5UBGwV56KjVEZE3WuLGNZoKLlkh4aK23joFdFL49nf1CcALuripU6jcBWdGE0AJGG/ar+BNpf2W/6/TufdKl983nXfPxdyHrxu9PlGDPWFqmaFon9c6WJG5HSFirhDphw1kRBISnUG1Mf2FFGFKSlPiM0ie5336AiU5UJoFG9x2/uWlbLP4CaRTNvwRIYlMahJrPqvNFce0lzjq7/zRNlJRCZx14UzNCg5IqQm8aKIU/7miNwkXrvw76e4xcokTpSfiv6kP3Fz6Gr5mbECoQZxJp9DE30Ad4PI5NJI8d0uzyCKubqgxeeSZn4T3yp6urhs1y3/Libiqrp47jrwXpBN0JDKr1MX/glaQtkaBoiU43iig8XjvIhA4I0Tb5Bsx3gl3iRrdy8l6DGbOhc4h8Jh6eYtZ4BmLlz/5ujUG7v3U2MA8mvzAoZh9sZC6QpfYWX41ctqmKgfdFirYIPtUj3t5lnDiWRfZJuYck7j9b28DrbkDyRXRvEye3PaAAAAAElFTkSuQmCC"
                    style={{ fontSize: "56px", color: "#81d4fa" }}
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sn={4} md={4}>
              <Typography fontSize="38px" fontWeight="bolder" color="white">Quick Links</Typography>
              <Box textAlign="justify" ml={15} mb={12} mt={3}>
                <Container maxWidth="sm">
                  <li
                    style={{
                      color: "white",
                      listStyle: "circle",
                      fontSize: "21px",
                    }}
                  >
                    About_Us
                  </li>
                  <li
                    style={{
                      color: "white",
                      listStyle: "circle",
                      fontSize: "21px",
                    }}
                  >
                    Portfolio
                  </li>
                  <li
                    style={{
                      color: "white",
                      listStyle: "circle",
                      fontSize: "21px",
                    }}
                  >
                    Job Openings
                  </li>
                  <li
                    style={{
                      color: "white",
                      listStyle: "circle",
                      fontSize: "21px",
                    }}
                  >
                    Contact
                  </li>
                  <li
                    style={{
                      color: "white",
                      listStyle: "circle",
                      fontSize: "21px",
                    }}
                  >
                    Request Quote
                  </li>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterPage;
