import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import Header from '../Components/Header'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "../Components/Footer";
import Home from "../pages/Home";

// declarer le theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      dark: '#303f9f'
    },
    secondary: {
      main: '#f50057',
      dark: '#c51162'
    }

  }
})
const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: '100%'
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
      <ThemeProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </Router>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
