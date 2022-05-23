import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import FooterPage from "./FooterPage";

const styles = {
  paperContainer: {
    width: "100%",
    height: "70vh",
    backgroundImage:
      "url(https://www.dignizant.com/img/home-top-bg.8cefcf7f.jpg)",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  columns: {
    paddingTop: "19px",
    textAlign: "center",
    margin: "auto",
  },
  heading: {
    display: "flex",
    flexWrap: " wrap-reverse",
    fontSize: "28px",
    marginTop: "37px",
    textAlign: "justify",
  },
  btnColor: {
    border: "1px solid white",
    marginLeft: "12px",
    color: "white",
    fontWeight: "bolder",
    fontSize: "18px",
    padding: "6px",
  },
  welcomePage: {
    textAlign: "center",
    marginTop: "35px",
  },
  middlePara: {
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
  },
  ourList: {
    color: " #2791cb",
    fontWeight: 700,
    marginTop: "50px",
    textAlign: "justify",
  },
  sectionWhatWeDo: {
    backgroundColor: "#eeeeee",
    paddingTop: "33px",
    height: "140px",
  },
  footerBefore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};

const HomePage = () => {
  const { text } = useTypewriter({
    words: [
      "We are an IT company that.",
      "Right Team are you Loocking For!",
      "Your All One Teach Parter",
      "Crafting Expreinces",
    ],
    loop: { 0: 0 },
  });

  return (
    <>
      <Box style={styles.paperContainer}>
        <Container style={styles.columns}>
          <Grid container>
            <Grid item xs={12} sm={7}>
              <Box style={{ marginTop: "100px" }}>
                <Typography variant="h4">{text}</Typography>
              </Box>
              <Box style={styles.heading}>
                <Typography variant="h5">
                  We are an IT company that specializes in creating meaningful
                  experiences through our work.
                </Typography>
              </Box>
              <Box pt={3}>
                <Button
                  style={{
                    backgroundColor: "#2196f3",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "18px",
                    padding: "6px",
                  }}
                >
                  Request Quote
                </Button>
                <Button style={styles.btnColor}>Our Portfolio</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box style={styles.welcomePage}>
        <Typography style={{ fontWeight: "bolder" }} variant="h3">
          Welcome to Dignizant Technologies
        </Typography>
        <Container style={{ flexWrap: "revert" }}>
          <Typography variant="h5" mb={4} mt={4} color="#90a4ae">
            We welcome you at our official website. Here you can find everything
            about digizant. We have hard workers, enthusiasts and visionary
            members in our team. Our focus is to make life easy with
            cost-effective, efficient and robust tech solutions that can make a
            huge impact. We handle your diverse business requirements
            efficiently and help them turn your business into a successful
            brand. Our experts put in the right amount of business expertise
            required for your business to stand out. We not only provide tech
            solutions but we always welcome you in any sort of consultancy
            required for your business to grow.
          </Typography>
        </Container>

        <Box mt={9}>
          <img
            width="100%"
            src="https://www.dignizant.com/img/img-1.5b77385b.png"
          />
        </Box>
      </Box>

      <Box style={styles.middlePara}>
        <Typography variant="h3" style={{ fontWeight: "bolder" }}>
          Why Choose Us?
        </Typography>

        <Container mt={7}>
          <Grid container>
            <Grid item xs={12} sm={4} style={styles.ourList}>
              <li style={{ fontSize: "21px" }}>We know the game</li>
              <li style={{ fontSize: "21px" }}>Quality is our agenda</li>
              <li style={{ fontSize: "21px" }}>Responsive to your needs</li>
            </Grid>
            <Grid item xs={12} sm={4} style={styles.ourList}>
              <li style={{ fontSize: "21px" }}>
                Take difficulties as challenges
              </li>
              <li style={{ fontSize: "21px" }}>Passionate about work</li>
              <li style={{ fontSize: "21px" }}>On time delivery</li>
            </Grid>
            <Grid item xs={12} sm={4} style={styles.ourList}>
              <li style={{ fontSize: "21px" }}>Commitment to work</li>
              <li style={{ fontSize: "21px" }}>
                Trouble-free customer service
              </li>
              <li style={{ fontSize: "21px" }}>Custom made solutions</li>
            </Grid>
          </Grid>
        </Container>

        <Box style={styles.sectionWhatWeDo} mt={8}>
          <Typography variant="h4" style={{ fontWeight: "bolder" }}>
            What We Do
          </Typography>
        </Box>

        <Box style={styles.middlePara}>
          <Typography variant="h3" style={{ fontWeight: "bolder" }}>
            How We Do It
          </Typography>
          <Container>
            <Typography variant="h5" mb={4} mt={4} color="#90a4ae">
              We believe in efficient work, high quality products and
              unforgettable customer experiences. As soon as a client reaches
              us, we take all necessary requirements. Our research team then
              takes charge and completes all the research work needed and
              suggests the best possible solution for their problem. Our team
              then start building the product and passes it through various
              phases in order to give life to your product.
            </Typography>
          </Container>
        </Box>
        <Box>
          <img src="https://www.dignizant.com/img/hwdi.6f6dae51.png" />
        </Box>
        <Box mt={6}>
          <img
            style={{ width: "100%" }}
            src="https://www.dignizant.com/img/img-2.b253f9b1.png"
          />
        </Box>
      </Box>

      <Box>
        <Box>
          <Box>
            <Typography
              variant="h3"
              style={{ textAlign: "center", fontWeight: "bolder" }}
              color="#424242"
            >
              Business Verticals
            </Typography>
          </Box>
          <Box textAlign="center" ml={19}>
            <Container maxWidth="xl">
              <Grid container mt={6} alignItems="center">
                <Grid item xs={12} sm={4} md={2} px={4}>
                  <img src="data:image/png;base64,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" />
                  <Box>
                    <Typography
                      variant="5"
                      color="textSecondary"
                      fontSize="23px"
                      fontWeight="bolder"
                      alignItems="center"
                    >
                      Eduction
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={2} px={4}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAC9FBMVEUAAAA0LU80LU8yKk01LlA/MlQ1L1EtIkQ0LU8zLE4yK001LU+i1PMuIkQ0LU8yK000LU9bksQxKkwzKkwzLU86L1EyJUcyKUtMa5eh0vIyLE0zLU8xK00uKUwzKkw0LU8uIUE6MVI0LVA0LE41L1IrGTk0LU9IN1bnh5ctKUxdlcoXHkNaP100LE1xTGj/nqlyTGg6KEih0vEwIkN7UGs3L1M0LE4uHz//nakZH0QvIUH/nqowJUZSPFu/c4f+nKiBVW80LU+jZXyh0vERGT/9lKGh0vG1boNOcJ1hoddUPVxDVH0sIEFHYIpcksZru/QzLE5OO1r7mKWVXnZYRmVTfq3/l6TsjJuxa4GmZn2FVnAlIENlquFATXSfY3tpR2SYX3dOOllBM1SOWnNIOV07MFL/oq1OcZ63b4SOttU+SXBBM1RWhbVJY468cYY9Q2nWgpN0TWmiZHv/m6hOOlnmhpZxUnem2fiVXnb/laMHFz37lqNVgrJnsOhXh7f/mqf+kqBmreSh0vH19PT/////k6H/lqRnsOhosen/mKWj1fRmr+Zpte0dIEVos+tru/T8+/o1LlAwK0739vb+/fsoJkq/c4c4N1v6+fgyKEowJEUaDjJlq+Jjpds7QGVsvfZxjq9ATnZIZI9kqd9gn9RXhrf/m6c/P2A4O2AtHj4hGD1qufJTfq62b4Sva4E2NFen2/tfms/Ixc1NcZ9HXYhCVH1MUXE+SnE+M1MoIERpt+88RWw0LE+SutoLBy9tvvnf3uKwrrurqLWem6ozMVTV09lYjL5Qd6X2j56EgZVxboYkEzSOjJ96doxFWYJeV3LBvsfUfpCnZ32ZYHjj9/9vxP7q6etwi6v7kZ99gJlhX3qeYnlKRGTv7u+3tcDvjJtuaYFpRmNFPVzN5/h/n7+fqL2TnLGWkKHchZZdbZCQW3RTS2cAABrs9fuZxuXC0uOYscy6vcqQp8OCjadrdpWBUm3j6/GJrs6quMz/tbxhgqtGSWu02zVjAAAAgHRSTlMADBLbGAUIuyr2wIsM6X10Mf7jrFkj87X+6dFS75CfOf797qZB/kr9/Pf+/vyakv7+/dvYrm1h9O3t4NXIwrCZeGVIC/779vTy8e7s7NrU04WEelxb8+zm5ubi4d/d2dnOzsPAv7i3snb97ero5+PVzc2yrqtfQPDw2sm7sqtTKaRe+04AAAppSURBVFjDtFdJaBNhFNballTRmri0qNFqWwuiqBQVxIvgQXHBg0e9eRLBm0dhyIMMzJjMNBNmJlvNhkkaCdlM02iaPaRp2oi10NqWqrih4i7qyX+SGfWajL5LZpLM++Z7y/fev6JJa12n6ujoWNXZsuL/Wd8qmvV4PCzd+/9Q2jaYHBbMgjmn+EMr/pdtPBKx4BiG4dbYsU0r/pOt8xaHMcH00c3r/6nnla2tK9vqF720e6QGMuwwHW5pF39uWSk7DX1d21S9h663tuxQq/hYkKyBjPhZfss6RfuK9t3bVavUm2RidN5jbTb63sLlrnsB25RSi9WMcPrtnlzHOoWaDthsuV075GC0d/I25TgWZnk+Z3djOuy3EaS1aKN5OlHAyTC7S06GNtI25QiKjstuK5B43btgtSuds9vTLVQb6We3tDaf8w2egr7mWYvXAqXFCYvT6bSIt7i2Hj7SQR9vaxZk/VHHI+yP6Qhr0B12OBzhgsuqxf+K3R52Q9MlphicGiN+Q2BWdyxuGh0YGBjtMUYLLpGGwOgc29s0yMp9Of+w+LK4xT/UszA9l/5Yrabnpp/2e9wWXMK/xG+UIYhnYs6aJ60umPA+nUsBUBTFUQD5ytP+iKuOoi2wq+U0ZKfJQRJCwSpz3i/fgNNIxkFquT8WFFAIq61DVjtu7YkKoR9T5vjnwNT9G+ofFLzsSQhcCBerapGjW9sDbj3CcAXiH8GgkUBEg6zXbhX6JEJvbWseZLd3Sk+gurKbn4NEIDSZpySUyXI3pkXx8qySQUVNC9WlL5q/vKOkXEy8zUiABmY+rtQhptF7zavXjSNRHYGRLtbzHkQMQ+hNcjnPcSKV0GjUiago2e3Nxaul78LZstDx+rD5s/juBsjEd87HR0OUyAWW+wUqWs/mzj5FE93ea+oxJdxjmM4ay30HjYETfFb5hZAmTT/NC8zQN8zSaNiCsuZgadPRdY02y6YtAXukqKyVr3H+GQWUBnUJTCRDwEEJpUVDMRpgDIY3NqGMLe7wVIJXNzhI1LmwfnyEFOa53zwHMJstVQ0MTPhCgGK2Mw3MYrqUWeRgOr5HiBc5Mm61032NBeuoXScqk77b/AJmp81lY5qCyeRLjgFNKMVQL30+88QsTHgL4h9xZWB7e0MivzYqKqNW57j5nKn4Ht4ZyIUgNc9XsulF4Ji08cmdA+YsVTL5MdH2BDa0N8bkNwgRufmBujuw/8fjZBYgNWE0J6dTAMvJBz9e8RXuL5BCoLdRJuPSMHfc/AST8a93Dt7OUwxQS9mKeX4WqkN770wPLQECkUZOMNDVEMimwYRzGEdPi20yWzmRDFSBy4cWAaCUTANkh5LxlxopJ4SW1LsDa9oaW4XoSNCpG9MK1VX+MgOabCkPBqjEQ6CBtC8LHHwsZSgGVZeg96Tu4rmriW2KBvu9y2SLdLstBOqToegzhgMA1IyVt1kAVGMZ4QbAgPok4UK6curk2WubNx9veOVSHxvs5/16DLdEjR9E6WJCNLuUysQXUowoK5mDRWFdOe09MtjVzAhuXb/GG0HaNVw0v56hRKfVnUNvfIKq1E2Ilg41PKvaqGj2XDVoRyOetNqM90FSxNTC2+XZ3xhLBx1IhfGTgU4ZI54vIirj7nL0meQXJSQkXTOLC0aBiP4Kr2geZMcRO4mjRXHK/HNGzAKXz6Q4EYOZ84YxAsP3yNpW2s7T4TH0plbWd2uGqUcMQMoPNVmOaoUl3N4ha61f3x9D24pl3MX7fj4DkYy4rHybK3ucJBKeYE4l65S1b/NZkhDaPsj6Ih9mAGoj0UABvPs+77NbSQyZ89q23XKODr9aMdeYpMIwAGsowjEugQoBkpAVhKJdtMy8ZJllF1O737W8dF33e0vbzhFMZLAdm6SSpnghzZZLSpo/Y9XapLXc/OHczKlbttVaP/rTd84RBczgqM8f2AG+57zf+33veT+ajxwuJwp+dcd7zciP78AD+Pb967uWV3wVcADKd9IpMz86+AU0LeiuKsYxq552vm/pHPk5NDT04d2fRy21Da+BA6d7hzXGf+ZtV91n4CBQGauefnzY8gijpamj4YH5QbGDw40zPzqEh23LIGarBMuMqlu1vOEFn89/2/C8TKvCrxKfbm0Sz/zowKUXZKiwjBTXl5XjLq1RazYazfjo5pL612X41W3WWfSpbEZIQYbZbFz+seZFcTco/JOotMblHV3ntmrLy8r4lTxPgfg64++WFQa9YOeCLU2GEF0tf0G51qEp1z7ZU1djWBfWuae6vs4AeVpcUIAzi9nulsquGsMqYThzu6Gmdk9VyXgS+LXPmtcHsZnNz2q7DJDH4wn00olGvdC9fAUG8Jhs7A2Lt4RxVotLjOfCtotjsaGXRq7nsTxvkuBTbyYYGzScVGZmZrJYrA20id0yz/FGvGQL0cNkbGveQB0vb8Fe7cPr7ZP8CNOjKKrB4OQJpxSAJW9xScndI4ypQ9P+M2nzF953UHr/iyG67xNG340Ehdy9+VjE6Cgxq1Sqz3ekUzZfECTlcGneSVakmRCcvRcu5SoiXfsoKtfKr6+urn5+2uAWJZuLxoWGagQ0bySPV+xXwwSmvReObYp0jSWYp+vq7Oys0TFd7L6BFM2xxMTESzrIO8kBddE4sGnfgCLSrWTGcME6Fwe5zZQmIm3fWpPpZo51GsnGlc7TFUJICNT9A5t44R5PSwzr6LAJAd9HrtC9kTwOOUpICEz90eghnnhX4AS7mADnhDAFioGKIvxHUYlnRKQlAMTWGm3VKDSuxCU4VuvuPM0yu0wNY2FfVuZYWd5NF5C4WJD+ngp3Ri3rcQvtihT91YMgWALXFq7moIFU7yI5DiSuGvUUUkd12C0XChQRFTY8DFOSMhcVCKnT7pMpEo+obQO3/O9drojokxFhxCcniPRMDzuelASwNjouMb7IJoMRPOFZSgEKgdbLWwnjhDeR7EuPkCFFMAJj05mfnCAXbfDzmYUERhBsLFiNOFBHJV3c1KZ2BFWopKBc8CwgJTG5OmStbRX9CNxjb3Nw4GJOXLQNIVZFUnKuXBQ7z4ecZLXJNY5PGr3eHqUeVejHscrjNL/6cQccn63koItBVZyFBID09PXZhxF4uK2VIG1/WmuPDcbrQVYyhAqWgjBmJwH09hZhOZkgNZVIOJyffVKqZ4KEk5CUtpf+UwLGxV+cwBN+NRlbt1QfUpJTI7+B5BCQeAGclJ0nkseAMLyUbCYCGaz80g4kyijiZv9LfEomBYXY/j6kJICx32OgQG5PaLPb7W09NmR6D5yVAsml2LolKwGxlIJwwnQWi0VisSw7KJtOk58SyNGLg0k1v9TNpZMMrokUBgFCOTpL+n4bMlWx9+pugVwQTrKJhxqdeCiKxTs2Xz8hpJeAcNw1Sde4Uv0u0ucqHsWZySrkyw4VSSTp53th54TvpughGpX8IWSeM85tPdUvVqCTnDkoG9ekZqUEiEQxvj5zi7/vosV0uuTYeVtvb+/t7FCOnEfzn2MHEQ6LQpdYIiLSpVI6ZfIBO+fhLBVT6HQ6hysk97f/X9uQGKjdCFrHAAAAAElFTkSuQmCC" />
                  <Box>
                    <Typography
                      color="textSecondary"
                      fontSize="19px"
                      fontWeight="bolder"
                    >
                      FINANCIAL
                      <br /> SERVICES
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                  <img src="data:image/png;base64,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" />
                  <Box>
                    <Typography
                      color="textSecondary"
                      fontSize="19px"
                      fontWeight="bolder"
                    >
                      HEALTHCARE
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                  <img src="data:image/png;base64,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" />
                  <Box>
                    <Typography
                      color="textSecondary"
                      fontSize="19px"
                      fontWeight="bolder"
                    >
                      HOSPITALITY
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAABdFBMVEUAAAA0LU80LU80LU80LU80LU83MlQ0LU80LU9CNFQ0LU80LU80LU80LU84L1E2LlA0LU80LU80LU80LU80LU/9kqD9kqA0LU80LU/9kqA0LU81Lk/9kqDkhpY0LU80LU/9kqBQO1pVPlySXHU0LU80LU/9kqCh0vE0LU+byuk6NVfId4s6N1lUPVzHd4pFR2ndgpNrgKHxjJuQuNhRWXqbyeiEp8ZpSGRGSWuYX3eAU277kZ/1jp3zjZyjZHuezu2Uvt3piJh3k7NkdpfWfpDPeo3Ac4eYxeWNtNN6lrdwiKhthKRofJ3Yf5FdbI2wa4GnZn1qSGWWwuJzjKzvi5rhhJRhcZLLeYzDdIhwSmdQO1pLOVg+MlOOttV/n7/mh5fagJK1boNVX4GeYnqRXHRbQV8+PF45MFKHqsr5kJ6xbIFDRGWMstL3j528cYZPV3iJWHF+Um10TWlyTGhlRWN2kbFic5Rgb5BcaYuva4GWXnaBVG5d9Ag5AAAAJnRSTlMA8X6A19b589P++OWrkXNLDQjGaRPr1bmblYh6ak9CJbeWTkszHRKj9pQAAAPiSURBVFjD7VgJU9pAFCYtLa1WrbX3fS4fgZjQBDAooihVKoXiUatQrfXufZ9/vi9ZqVuYdNq4OKXTbzKQt5PJN+9733vLEviPdkRfZ1dvoLW4fARAZ1+ghbhyDBwnLgdahN7zIBy9dgKEY7cCrUB3J4DNtdnBc91BAB3nT0qn6AmC8GaZEU5dvKAAULrlUtw8A8L7ebaD05e6QDjUI4/i5FkQFp8yAVdvHHNLc0WWUopTb3uQ/YTBc9fd9CRpFnLqfZs1gkrT4xhNTmsCeNlMwUtzFh1yTKYA48wDfVCOyyKJepEc3A+SAxJJ+ul9a6kUqbacSi0MMdafSg1zErmZLAJ3GLsHgJw2DFR25ArIJFkHHjL2mJPcB97uZNIrU67xaHSWsaFodJ7acjQaNTgJgoeCh+g6EgweabgLHpDlrl9ClruwGYupKl305dyph10ooVAHOmSRqCMRBwn3Eu+mVSh/XJPhdNqgYqTTr18wlk+nn3KSWNgLMSiyLByLeHBEiESWhVVPEpJLgoXlkXgXXr5c3u6SRMLlWjYMmozbhjFHct02jFGBZMI0J8LhrGmOUJAwzWm/cr13uQxgM8PYF+CNIFcRKIbDj4BXFHwAPvuVS2tw1zshkzFgzCUZoGAGeOJXroVabZ4yqdWqlMlKrfZaIJlS1alw2FRV5+0FVX3g18JDmQwVYzCTyVCwnckMCXJlI5EsfdGnEKjS3NV6C8vv+P5yeZS8Wy6vbDM2Vy7nhUye53KT5N1cLkmBmcttuSQSBuSCUJMHANV6EnhGwV3A2icLyx+QI8nkCL02mXxOwXQyabblgEzIG5AekL2ffNO0PHlX09ap119q2ldBrhldn6HK6HqJgiVdL/p2F7dwk7sS3F0fycK77pK9x7fewiSXl4UT/46F1X3Y4xN/7R5fdU/a4z+mcErI5BPwybXwBp/CrwS5/J8ZH9KZUSApWFaBPGZZYxQkLetuW7or0nYDsukQJMi1VCotUauXSk4xtkqlHK+JpD3+ACf5KGuPrzadtLhcHj8k/Fl4xbbnGJu17dUXxGXbd4RMtuLxLer7eLxAwWQ8vtSWe7y3u/5WC9PoXdDqWJ9rkGvC0gd0flkTe5GrH7tYa8hkCruI++54TjJgOXgGfG0gKQJapZKqVBaB4l7kigLkTd4JdoNccbeLCPd3M/FLUqi/0RYz4Uv8H/DVvcuV+wVJ2V2xicSfXHnmIA8U6lVe5SQXEAvXl1bqmUzxpZhfkma5Ylm+1ESS/SOSEFDVHFSBDbcXNoCjmotOgDfHRv2ho85DA7SmA6HfJ4F//D5Jl+IXXYH/aA98B/LTTLGhctq1AAAAAElFTkSuQmCC" />
                  <Box>
                    <Typography
                      color="textSecondary"
                      fontSize="19px"
                      fontWeight="bolder"
                    >
                      REAL ESTATE
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              {/* //Second Column  */}
              <Grid container mt={6} textAlign="center">
                <Grid item xs={12} sm={4} md={2}>
                  <img src="data:image/png;base64,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" />
                  <Box>
                    <Typography
                      color="textSecondary"
                      fontSize="19px"
                      fontWeight="bolder"
                      sx={{ fontWeight: "bolder" }}
                      ml={1}
                    >
                      MANUFACTURING
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                  <img src="data:image/png;base64,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" />
                  <Box>
                    <Typography
                      color="textSecondary"
                      fontSize="19px"
                      fontWeight="bolder"
                      variant="5"
                    >
                      SOCIAL MARKETING
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAABEVBMVEUAAAA0LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU+h0vE0LU/9kqBqf6CEp8ZRWHqYX3eZYHiEpsY9O12byOdsgqOXX3c6NlidzOuJrs7EdYlvSmc4M1WWwuGPuNeBocF4k7Pvi5pgb5BebI1VX4FTXH1OVHZLUHJHSmxDQmOXwuKUvt1vh6j5kJ70jZzSfY/Ac4iqaH6SXHVlTWpERWdrSWVnRmNMOVlDNlY/M1Sfz+6YxOOSu9uGqch6l7d3krJpfZ7piJjkhZbagZLZgJHHd4q4b4RXY4SPaYONaIJgX35vVHFSQWAxhzc6AAAAGHRSTlMA8vFD9+fcz8Cvm5ZqYTQqw6aAf3FURTtQ/be2AAAB8ElEQVRYw+2ZWU/CQBRG24r7vvu1qFAsqCAqKogiICC47/v//yGWuQ/zgmnDcAloT9KkDyQnzMnQO0ULCOgq07ODhqHrurjkDV2tbuTnjNElf44JKDHO7CDGfKwVXDJWm+w7ACY9JaMAEittkwwBQ54SA3hbUWAB0D0lIeBERTIFhPx8E0tFMgAYnhJdXaL/I0nQpPcknWjSG5JWy5XK8ze5BSybW3IEILoT5w1/CAgNa5NVEAcpruUiydcnaZKcklfzIwcXx7I5mpCkbJrmuyPSxBg2I0nWTZeHczQ5ijCFXzMFz6RZDTM0ERJi81to9lIMTUhCmjppbIYmkt2NBlyid/EONyGJ1EBo0hxNJGdbQnOYYJOQpkoamyO8pFiDSy7OEF5SoCXzkCgt1yPFryT4mpySwkmzbEZSFC/gsr1/zLEZiU2hACl4NuPTlvwtZtqMu6TIkoJFUlhviL0RY3ky0nKt1UXvGNOTcaPZu4YmmTzXSFQyX6o0r1zzTSvlEvWWAx5DE0E0wnh0IMn2vc05pmbhYl3xTvUxIHPDfmYMJ/rxzPh3jtjBOT4I3+fhO/DKVvcj2VORLPp5LzwCOMn2HZdDwKCnZFnMI+FfiMiblqQrAOY0T8ahyIjmgzEoMaP5YnK4/b+bhue1gIBu8gMgKKxU2mkFwwAAAABJRU5ErkJggg==" />
                  <Box>
                    <Typography
                      color="textSecondary"
                      fontSize="19px"
                      fontWeight="bolder"
                    >
                      ENTERTAINMENT
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAABfVBMVEUAAAA0LU80LU80LU80LU80LU80LU80LU81L1E0LU80LU82MlU0LU80LU80LU80LU80LU82MFM0LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU80LU82NFc0LU80LU80LU80LU80LU80LU80LU80LU80LU80LU9DNVU0LU80LU80LU80LU80LU80LU80LU80LU82MlU2M1Y0LU80LU80LU80LU9IYIw3Nlk0LU80LU80LU80LU/Ac4dTPFugY3uZYHi8cYY5Ol5fQmBbQV8/M1M7QGV0TWk4N1s5O180LU9pSGQ8QWZNOllWPl1BTnWraX9mreQ0LU/9kqBemc1jptw3L1FSe6qAU21hoNZfnNFYi7xWhLRLaJREVn6YX3dAS3JdQV9ck8bzjZzuiprfg5SsaX88Q2k7P2Q6PWJOOlk9MlJio9lPc6HYf5FGXIa4b4RCUHhVPlw5OVxlquBQdqTnh5fGdoqLWXI4OFuOy+W/AAAAVnRSTlMA8ru8RC0vA/ZCOfwn/Oykjfk+M95zFQj00ptpUk47NRAM/uXbx6qBbV4gHhr++de1r5GGWiv5zc1+YED98a2VY0r7+vjv6ujg4ODe0rWmnpmNh3duMVjaJjQAAAOgSURBVFjD7ddnUxpRFMbxs7IskdAigool9gJRkxjTe+89+ZMgmqJGjem9fvao3GUZ+u7Cq/AbGc+cYeaB5d6zd6XlP9Y3ou1o61KNobDWIDExdaOYrRM0jJgiKLOqkaIhMtAjecnAFj+wTzXC8HLpiUtLp6BXinggosp2ePPYrQ8zzMSlyBRoqvSFYMFtyEkYl2JxDfzWz/TVZcaP3dAvJcKQUGUAMk/dhTwHzScl+qF7SNWj8NFdyAqckVI+DQ6p+hhsuspYBAwpIwJj5qYPwis3IQswIuUYBVvFAy/chLyBCSlrBCZVeRy+u8h4AsSlrGPQWbCgnzsPeQFHpbw44C0YLc5D3lrXpEQPzJk3ABh2vFWeAUNSQS+MqtLX7eJ6fYYDUokvCLq1oFechgzDgFS0H8IFC3rRWcYCdEplA6CJcgR+Ogv5CgmpzBeyRkvM6V3lAwQNqSIBHlXuw+FoWVDLp9r1Cg5Z18vRaNmECalqFs5aW+Wtg4wlIClVTVhnjK4gPLMfchL2S3UpIKDqW45Gy3eYkhrG4KAqo4Dt0fIMGJQaDkFIlFMOTi0vISy1DAJ7VX3b/mh5moF2qSlsHZgCwJKtDHVKqUmHbvNtV2xvlRVISDXWkO9T9T27W2URmJc6JKy7QcruaPkIo1IPb8Gp5QZ8thOyCZNSl1nr0P8Q/i4+rZu1SWqahDFRNJjRNK17l7arwJ49h7f/tl6784Z3Dw8DR6Q+yYLREsamfqlTj/VANK9hy6hP6nS84CYdHzD8+l5ve7t3r+73duiGoXd4/XrU7JzQjag+MD+gRw293TC6pDZryHdIE1mnlmY7B6FBabYQTEmznYED0mw6BH3SbEchYugnvGr5RkuXb0nHHxCb5nDgrNgTwIH9YlPM42lr234V/ysqrY5nPCktLf+vvmORuePFo78jNjEXCzTs5tIDQKhXCsRPsyMiDTGF6aDV3DeCMtYl7s0DZJez00CfmK4Dq8vLq0CbuHca3m2k0+n1VQiZn/oB8CW95SLgFbeSQfiU3rb2HnTVvQrZ9I5rcEfc6od36Zw/+efzrmkyG7nmZehsRMiqCnmd/+kHIbOea55vRIgfplXIt/xh33cBXueal2BMXOuErPlFSKnmTfMi/toDk+JaL5D9tLaxDIyL8gj49ntt/ct0g041BwDeA4SGxHR3p5mxnhXcGidnNiWW++TMTEljHGob0UJHYz4pFE10alrPwYC0tJT1Dwmzr0+TuCpRAAAAAElFTkSuQmCC" />
                  <Typography
                    color="textSecondary"
                    fontSize="20px"
                    fontWeight="bolder"
                  >
                    E-COMMERCE
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={2}>
                  <img src="data:image/png;base64,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" />
                  <Typography
                    color="textSecondary"
                    fontSize="19px"
                    fontWeight="bolder"
                  >
                    UTILITIES
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>

      <Box mt={11} textAlign="center" style={styles.footerBefore}>
        <Box>
          <IconButton>
            <ArrowBackIosNewOutlinedIcon
              style={{
                color: "#03a9f4",
                fontSize: "25px",
                border: "1px solid #bdbdbd",
                borderRadius: "50%",
              }}
            />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bolder" color="#37474f">
            {" "}
            Our Latest Work
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <ArrowForwardIosIcon
              style={{
                color: "#03a9f4",
                fontSize: "25px",
                border: "1px solid #bdbdbd",
                borderRadius: "50%",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box style={styles.footerBefore} mt={18}>
        <Box>
          <IconButton>
            <ArrowBackIosNewOutlinedIcon
              style={{
                color: "#03a9f4",
                fontSize: "25px",
                border: "1px solid #bdbdbd",
                borderRadius: "50%",
              }}
            />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bolder" color="#37474f">
            {" "}
            What Our Client Says
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <ArrowForwardIosIcon
              style={{
                color: "#03a9f4",
                fontSize: "25px",
                border: "1px solid #bdbdbd",
                borderRadius: "50%",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <FooterPage />
      </Box>
    </>
  );
};

export default HomePage;
