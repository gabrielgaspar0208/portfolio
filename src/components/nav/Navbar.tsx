import React from "react";
import '@fontsource/roboto/700.css';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  nav: {
    background: "#171A1B",
    padding: "8px",
    
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
    color: "#b72a72",
    marginLeft: theme.spacing(30),
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontFamily: "roboto",
    marginRight: theme.spacing(40),
    marginLeft: theme.spacing(-28),
    "&:hover": {
      color: "#b72a72",
    },
  },
}));


function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.nav}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Gaspar
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Sobre
            </Link>
            <Link to="/about" className={classes.link}>
              Projetos
            </Link>
            <Link to="/contact" className={classes.link}>
              Contato
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
