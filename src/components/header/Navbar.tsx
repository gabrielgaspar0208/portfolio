import DrawerComponent from "./Drawer";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Theme,
} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
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
    color: "#835AFD",
    marginLeft: theme.spacing(15),
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontFamily: "roboto",
    marginRight: theme.spacing(40),
    marginLeft: theme.spacing(-28),
    "&:hover": {
      color: "#835AFD",
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
            <a href="#about" className={classes.link}>
              Sobre
            </a>
            <a href="#skills" className={classes.link}>
              Skills
            </a>
            <a href="#projects" className={classes.link}>
              Projetos
            </a>
            <a href="#contact" className={classes.link}>
              Contato
            </a>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
