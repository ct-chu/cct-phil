import * as React from "react";
import { useState } from "react";
//import { Helmet } from "react-helmet";

import {
  CssBaseline,
  Typography,
  Container,
  Button,
  Grid,
} from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { red } from "@mui/material/colors";

const IndexPage = () => {
  const themeDark = createTheme({
    palette: {
      background: {
        default: "#202020",
      },
      primary: {
        main: "#ebcb8b",
      },
    },
    typography: {
      fontFamily: ["sans-serif", '"Apple Color Emoji"'].join(","),
      h2: {
        fontWeight: "300",
        color: "#d8dee9",
      },
      h6: {
        fontWeight: "100",
        fontStyle: "italic",
        color: "#88c0d0",
      },
    },
  });

  themeDark.typography.h5 = {
    fontWeight: "300",
    color: "#ffffff",
    fontSize: "1.3rem",
    [themeDark.breakpoints.down("md")]: {
      fontSize: "1.0rem",
    },
  };

  const { rows } = require("../link_table.js");

  const GOD_link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  }));

  return (
    <>
      <ThemeProvider theme={themeDark}>
        <CssBaseline />
        <main>
          <Container
            maxWidth="lg"
            sx={{
              pt: 10,
              pb: 10,
            }}
          >
            <Container
              maxWidth="md"
              sx={{
                bgcolor: "#2e3440",
                pt: 8,
                pb: 8,
              }}
            >
              <Typography variant="h2" align="center" sx={{ pb: 4 }}>
                CCT's philosophy course archive
              </Typography>
              <Typography variant="h6" align="center" paragraph>
                Why are you here? <br />
                Who says I am here? <br />
                You are here. <br />
                What shows that I am here?
              </Typography>
            </Container>

            <Container sx={{ pt: 5 }}></Container>

            <Container
              maxWidth="md"
              sx={{
                bgcolor: "#2e3440",
                pt: 10,
                pb: 10,
              }}
            >
              <Table size="medium">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography variant="h5">{row.title}</Typography>
                      </TableCell>
                      <TableCell>
                        <Button variant="text" target="_blank" href={row.link}>
                          Link
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Container>

            <Container sx={{ pt: 5 }}></Container>

            <Container
              maxWidth="md"
              sx={{
                bgcolor: "#2e3440",
                pt: 7,
                pb: 7,
              }}
            >
              <Grid container justifyContent="center">
                <ColorButton
                  variant="contained"
                  target="_blank"
                  href={GOD_link}
                >
                  DO NOT PRESS
                </ColorButton>
              </Grid>
            </Container>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>CCT's philosophy course archive</title>;
