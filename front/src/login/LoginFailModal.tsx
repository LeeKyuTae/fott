import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import LogInIcon from "../resources/icons/login_icon.png";
import MainIcon from "../resources/icons/popup-login_error.png";
import InputBase from '@material-ui/core/InputBase';
interface Props {
    closeModal() : void,
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position : "relative",
    },
    loginButton : {
      width : 514,
      height: 60,
      borderRadius : 30,
      backgroundColor : "#22479f",
      display : "flex",
      justifyContent : "center",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize : 28,
      lineHeight : 1.14,
      letterSpacing : -0.7,
      color : "white",
      alignItems : "center",
      marginTop : 40,
    },
    textInfo : {
        position : "absolute",
        left : 90,
        bottom : 60,
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        width : 448,
        fontFamily: "NanumSquareR, sans-serif",
        fontSize : 22,
        lineHeight : 1.18,
        letterSpacing : -0.55,
    },
    failInfo : {
        fontFamily: "NanumSquareB, sans-serif",
        fontSize : 28,
        lineHeight : 1.14,
        letterSpacing : -0.7,
        marginBottom : 24,
    },
  })
);

const LoginFailModal: React.FC<Props> = (props) => {
    
    const classes = useStyles();

    const TextInfo = () => {
        return <div className={classes.textInfo}>
            <div className={classes.failInfo}>로그인 실패</div>
            <div>아이디 혹은 비밀번호 입력이 틀렸습니다.</div> 
            <div>비밀번호/아이디 찾기 및 회원가입을 이용해 주세요. </div>
            <button className={classes.loginButton} onClick={props.closeModal}>확인</button>
        </div>
    }
   
    return <div> 
    <div className={classes.root} >
        <img src={MainIcon}   alt="profile"></img>
        <TextInfo/>
    </div>
    </div>

}

export default LoginFailModal;
