import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import SearchIcon from "../resources/icons/donation_search_btn.png";
import InputBase from "@material-ui/core/InputBase";
import axios from "axios";
import apiPath from "../apiPath";
import { Party } from "../models/party";
import FindOtt from "./FindOtt";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useHistory } from "react-router-dom";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    nextButtonBox: {
      display: "flex",
      justifyContent: "flex-end",
      // paddingRight : 40,
      // marginBottom : 50,
    },
    Button: {
      width: 600,
      height: 50,
      backgroundColor: "#e8f2ff",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 23,
      lineHeight: 1.15,
      letterSpacing: -0.65,
      display: "flex",
      marginTop: 50,
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      color: "black",
      border: "none",
      borderRadius: 5,
    },
    selectBox: {
      width: 1200,
      display: "flex",
      justifyContent: "space-around",
    },
    titleInput: {
      marginTop: 50,
      width: 900,
      fontSize: 23,
      letterSpacing: -0.65,
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      borderBottom: "solid 2px #000000",
    },
  })
);

const MakeParty: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [partyList, setPartyList] = useState<Array<Party>>([]);
  const [ottId, setOttId] = useState(-1);
  const [paymentDay, setPaymentDay] = useState(1);
  const [paymentMonth, setPaymentMonth] = useState(1);
  const monthList = [1, 3, 6];
  const dayList = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];
  const [url, setUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(apiPath.getAllPartyList());
      setPartyList(result.data);
    };
    fetchData();
  }, []);

  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPaymentMonth(event.target.value as number);
  };
  const handleDayChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPaymentDay(event.target.value as number);
  };

  const inputUrl = (value: string) => {
    setUrl(value);
  };

  const makeParty = async () => {
    try {
      const result = await axios.post(apiPath.makeParty(), {
        userId: localStorage.getItem("user"),
        ottId: ottId,
        paymentDay: paymentDay,
        paymentMonth: paymentMonth,
        openChatUrl: url,
      });
      history.push("/");
      window.location.reload(false);
    } catch (error) {
      alert("로그인 후 사용이 가능합니다.");
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.selectBox}>
        <FindOtt setData={setOttId} />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">결제 단위 선택</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={paymentMonth}
            onChange={handleMonthChange}
          >
            {monthList.map((data, idx) => {
              return (
                <MenuItem value={data} key={idx}>
                  {`${data} 개월`}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">납부 날짜 선택</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={paymentDay}
            onChange={handleDayChange}
          >
            {dayList.map((data, idx) => {
              return (
                <MenuItem value={data} key={idx}>
                  {`${data} 일`}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <InputBase
        className={classes.titleInput}
        inputProps={{ "aria-label": "naked" }}
        placeholder="오픈 채팅 URL을 적어주세요"
        value={url}
        onChange={(e) => inputUrl(e.target.value)}
      ></InputBase>
      <button className={classes.Button} onClick={makeParty}>
        만들기
      </button>
    </div>
  );
};

export default MakeParty;
