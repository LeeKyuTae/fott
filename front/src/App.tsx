import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LineViewChart from "./charts/LineViewChart";
import { testDatas } from "./config/chartUtils";
import { Line } from "recharts";
import AppBar from "./AppBar/AppBar";
import Login from "./login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import PartyList from "./Screen/PartyList";
import MakeParty from "./Screen/MakeParty";
import MyParty from "./Screen/MyParty";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
    },
    test: {
      margin: 300,
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <div className={classes.root}>
          <Switch>
            <Route exact path="/signin" component={Login} />
            <Route exact path="/" component={PartyList} />
            <Route exact path="/make-party" component={MakeParty} />
            <Route exact path="/my" component={MyParty} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
