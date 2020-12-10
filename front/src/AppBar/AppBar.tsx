import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, useHistory } from "react-router-dom";
interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 100,
      position: "static",
      flexGrow: 1,
      backgroundColor: "#ffffff",
      boxShadow: "0 5px 15px 0 rgba(0, 0, 0, 0.16)",
      display: "flex",
      justifyContent: "center",
    },
    toolBar: {
      display: "flex",
      justifyContent: "space-between",
    },
    statusInfo: {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 28,
      lineHeight: 1.14,
      letterSpacing: -0.7,
      width: 145,
      height: 59,
      borderRadius: 30,
      border: "solid 2px #333333",
    },
    buttonBox: {
      marginRight: 100,
      width: 145,
      height: 59,
      borderRadius: 30,
      border: "solid 2px #333333",
    },
    logo: {
      color: "black",
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 40,
      lineHeight: 1.13,
      letterSpacing: -1,
      marginRight: 200,
    },
    box: {
      paddingLeft: 30,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    img: {},
    topText: {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 28,
      lineHeight: 1.14,
      letterSpacing: -0.7,
      marginRight: 80,
      color: "black",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
  })
);

const MainBar: React.FC<Props> = (props) => {
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {}, [localStorage.getItem("jwtToken")]);

  const logOut = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    history.push("/");
    window.location.reload(false);
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.box}>
          <Link to={`/`} className={classes.link}>
            <div className={classes.logo}>FOTT </div>
          </Link>

          <Link to={`/`} className={classes.link}>
            <div className={classes.topText}> 파티 찾기</div>
          </Link>
          <Link to={`/make-party`} className={classes.link}>
            <div className={classes.topText}> 파티 만들기</div>
          </Link>
          <Link to={`/my`} className={classes.link}>
            <div className={classes.topText}> 내 파티</div>
          </Link>
        </div>
        {localStorage.getItem("jwtToken") ? (
          <div className={classes.buttonBox}>
            <Button
              className={classes.statusInfo}
              onClick={logOut}
            >{`로그아웃`}</Button>
          </div>
        ) : (
          <Button className={classes.statusInfo} href="signin">
            로그인
          </Button>
        )}
        {/* <Button><Link to="/signin"> <div className={classes.statusInfo}></div>로그인</Link></Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default MainBar;
