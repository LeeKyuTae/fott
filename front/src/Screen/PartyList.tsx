import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import SearchIcon from "../resources/icons/donation_search_btn.png";
import InputBase from "@material-ui/core/InputBase";
import axios from "axios";
import apiPath from "../apiPath";
import { Party } from "../models/party";
import FastMatch from "./FastMatch";
import { useHistory } from "react-router-dom";

interface Props {
  setData(data: string): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    mainWord: {
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 40,
      lineHeight: 1.13,
      letterSpacing: -1,
      textAlign: "left",
      marginBottom: 80,
    },
    introduceContent: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "left",
      paddingLeft: 76,
      paddingRight: 114,
      marginBottom: 150,
    },
    planBox: {
      paddingLeft: 76,
      paddingRight: 114,
      marginBottom: 150,
    },
    line1: {
      width: 1147,
      height: 0,
      border: "solid 1px #c8c8c8",
      backgroundColor: "#ffffff",
    },
    content1: {
      height: 157,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 80,
    },
    content1_Detail_Box: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    content1_Title: {
      width: 142,
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 32,
      lineHeight: 1.13,
      letterSpacing: -0.8,
      textAlign: "left",
      marginRight: 27,
    },
    content1_Detail: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "left",
    },
    content3_Title: {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 32,
      lineHeight: 1.13,
      letterSpacing: -0.8,
      textAlign: "left",
      marginBottom: 33,
    },
    content2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 80,
    },
    tableHeader: {
      marginTop: 32,
      width: 1400,
      height: 69,
      backgroundColor: "#f8f8f8",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginBottom: 20,
    },
    headerContent: {
      width: "25%",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 28,
      lineHeight: 1.14,
      letterSpacing: -0.7,
      textAlign: "center",
    },
    contentBox: {
      display: "flex",
      flexDirection: "column",
      // justifyContent: "space-around",
      marginBottom: 110,
      height: 900,
      overflowY: "auto",
    },
    tableContentBox: {
      width: 1400,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 5,
      marginBottom: 5,
    },
    tableContent: {
      width: "25%",
      wordBreak: "break-all",
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "center",
      marginBottom: 20,
      display: "flex",
      justifyContent: "center",
    },
    promiseBox: {
      display: "flex",
      flexDirection: "column",
    },
    promiseContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 28,
    },
    text1: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "left",
    },
    checkBox: {
      marginLeft: 28,
      width: 40,
      height: 40,
      backgroundColor: "#22479f",
    },
    nextButtonBox: {
      display: "flex",
      justifyContent: "flex-end",
      // paddingRight : 40,
      // marginBottom : 50,
    },
    Button: {
      width: 130,
      height: 50,
      backgroundColor: "#e8f2ff",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 23,
      lineHeight: 1.15,
      letterSpacing: -0.65,
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      color: "black",
      border: "none",
      borderRadius: 5,
    },
    topTitle: {
      width: "100%",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 52,
      lineHeight: 1.13,
      letterSpacing: -1.3,
      textAlign: "left",
      marginBottom: 24,
      paddingLeft: 100,
    },
    topBar: {
      width: 1320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#22479f",
      marginBottom: 100,
    },
  })
);

const PartyList: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [partyList, setPartyList] = useState<Array<Party>>([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(apiPath.getAllPartyList());
      setPartyList(result.data);
    };
    fetchData();
  }, []);

  const participant = async (partyId: number | null) => {
    try {
      const result = await axios.post(apiPath.participantParty(), {
        userId: localStorage.getItem("user"),
        partyId: partyId,
      });
      console.log(result.status);
      if (result.status === 200) {
        alert("파티에 들어갔습니다.");
        history.push("/");
        window.location.reload(false);
      }
    } catch (error) {
      alert("참가할 수 없습니다.");
    }
  };

  return (
    <div>
      <FastMatch />
      <div>
        <div className={classes.tableHeader}>
          <div className={classes.headerContent}>OTT 서비스</div>
          <div className={classes.headerContent}>현재 인원</div>
          <div className={classes.headerContent}>가격</div>
          <div className={classes.headerContent}>납부 날짜</div>
          <div className={classes.headerContent}>결제 단위</div>
          <div className={classes.headerContent}>참가</div>
        </div>
        <div className={classes.contentBox}>
          {partyList.map((value, idx) => {
            return (
              <div className={classes.tableContentBox} key={idx}>
                <div className={classes.tableContent}>{`${value.ottName}`}</div>
                <div
                  className={classes.tableContent}
                >{`${value.userCount}/${value.maxUser}`}</div>
                <div className={classes.tableContent}>{`${value.price}원`}</div>
                <div
                  className={classes.tableContent}
                >{`${value.paymentDay}일`}</div>
                <div
                  className={classes.tableContent}
                >{`${value.paymentMonth}개월 단위`}</div>
                <div className={classes.tableContent}>
                  <button
                    className={classes.Button}
                    onClick={() => participant(value.partyId)}
                  >
                    참가
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartyList;
