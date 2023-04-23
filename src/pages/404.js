import * as React from "react";
import { Link } from "gatsby";

import { CssBaseline, Typography, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
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
                Sor9ry, page not found
              </Typography>
              <Typography variant="h6" align="center" paragraph>
                Are you lost in life too, mate?
                <br />
                <Link to="/" variant="h6">
                  Go home.
                </Link>
              </Typography>
            </Container>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
