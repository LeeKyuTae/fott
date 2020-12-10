import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import LogInIcon from "../resources/icons/login_icon.png";
import PasswordIcon from "../resources/icons/password_icon.png";
import InputBase from "@material-ui/core/InputBase";
import CheckIcon from "../resources/icons/acctive_check_btn.png";
import LoginFailModal from "./LoginFailModal";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import apiPath from "../apiPath";
import { useHistory } from "react-router-dom";
interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 700,
      height: 392,
      borderRadius: 10,
      border: "solid 2px #73a8ed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 28,
    },
    infoContent: {
      fontSize: 24,
      letterSpacing: -0.65,
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      marginBottom: 80,
    },
    inputBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 25,
    },
    imageBox: {
      width: 28,
      height: 30,
    },
    userInput: {
      marginLeft: 20,
      fontSize: 24,
      letterSpacing: -0.6,
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      width: 446,
      height: 60,
      borderRadius: 30,
      backgroundColor: "#e8f2ff",
      display: "flex",
      justifyContent: "center",
    },
    saveId: {
      width: "84%",
      marginRight: 103,
      textAlign: "right",
      fontSize: 20,
      letterSpacing: -0.5,
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.15,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    contents: {
      fontSize: 24,
      letterSpacing: -0.6,
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      width: "80%",
    },
    password: {
      width: "80%",
    },
    upBar: {
      width: 1320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#22479f",
    },
    loginButton: {
      width: 700,
      height: 66,
      borderRadius: 10,
      backgroundColor: "#22479f",
      display: "flex",
      justifyContent: "center",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 28,
      lineHeight: 1.14,
      letterSpacing: -0.7,
      color: "white",
      alignItems: "center",
      marginBottom: 12,
    },
    checkButton: {
      width: 28,
      height: 28,
      borderRadius: 14,
      border: "solid 2px #22479f",
      backgroundColor: "white",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    topTitle: {
      width: "100%",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 52,
      lineHeight: 1.13,
      letterSpacing: -1.3,
      textAlign: "left",
      marginBottom: 24,
    },
    topBar: {
      width: 1320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#22479f",
      marginBottom: 100,
    },
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const Login: React.FC<Props> = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkSaveId, setCheckSaveId] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const inputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const clickLogin = async () => {
    try {
      const result = await axios.post(apiPath.signIn(), {
        userId: id,
        password: password,
      });
      const header = result.headers;
      if (result.status === 200) {
        console.log("===========================================");
        console.log(header.authorization);
        console.log("===========================================");
        localStorage.setItem("jwtToken", header.authorization);
        localStorage.setItem("user", result.data.userId);
        history.push("/");
        window.location.reload(false);
      } else {
        console.log(result);
        setLoginFail(true);
        setId("");
        setPassword("");
      }
    } catch (error) {
      setLoginFail(true);
      setId("");
      setPassword("");
    }
  };
  const modalClose = () => {
    setLoginFail(false);
  };
  const saveCheckedId = () => {
    setCheckSaveId(!checkSaveId);
  };

  const signIn = () => {};

  return (
    <div className={classes.main}>
      <div className={classes.topTitle}>로그인</div>
      <div className={classes.topBar}></div>
      <div className={classes.root}>
        <div className={classes.infoContent}>
          {" "}
          OTT 매칭 서비스를 방문해 주셔서 감사합니다
        </div>
        <div className={classes.inputBox}>
          <img src={LogInIcon} className={classes.imageBox} alt="profile"></img>
          <div className={classes.userInput}>
            <InputBase
              className={classes.contents}
              inputProps={{ "aria-label": "naked" }}
              placeholder="아이디를 입력해주세요."
              defaultValue={id}
              value={id}
              onChange={inputContent}
              id="text"
            ></InputBase>
          </div>
        </div>
        <div className={classes.inputBox}>
          <img
            src={PasswordIcon}
            className={classes.imageBox}
            alt="profile"
          ></img>
          <div className={classes.userInput}>
            <InputBase
              className={classes.password}
              type="Password"
              value={password}
              onChange={inputPassword}
              id="text1"
            ></InputBase>
          </div>
        </div>
        <div className={classes.saveId}>
          {checkSaveId ? (
            <img src={CheckIcon} onClick={saveCheckedId} alt="profile"></img>
          ) : (
            <button
              className={classes.checkButton}
              onClick={saveCheckedId}
            ></button>
          )}
          <div>&nbsp;아이디 저장</div>
        </div>
      </div>
      <button className={classes.loginButton} onClick={clickLogin}>
        {" "}
        로그인
      </button>
      <Modal className={classes.modal} open={loginFail} onClose={modalClose}>
        <LoginFailModal closeModal={modalClose} />
      </Modal>
    </div>
  );
};

export default Login;
