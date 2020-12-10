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
      width: 400,
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
    selectBox: {
      width: 1200,
      display: "flex",
      justifyContent: "space-around",
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
      marginBottom: 30,
    },
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
  })
);

const FastMatch: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [partyList, setPartyList] = useState<Array<Party>>([]);
  const [ottId, setOttId] = useState(-1);
  const [paymentMonth, setPaymentMonth] = useState(1);
  const monthList = [1, 3, 6];
  const history = useHistory();

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

  const fastMatching = async () => {
    try {
      const result = await axios.post(apiPath.fastMatching(), {
        userId: localStorage.getItem("user"),
        ottId: ottId,
        paymentMonth: paymentMonth,
      });
      console.log(result.status);
      if (result.status === 200) {
        alert("파티에 들어갔습니다.");
        history.push("/");
        window.location.reload(false);
      }
    } catch (error) {
      alert("존재하는 파티가 없습니다.");
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.topTitle}>빠른 검색</div>
      <div className={classes.topBar}></div>
      <div className={classes.main}>
        <div className={classes.selectBox}>
          <FindOtt setData={setOttId} />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              결제 단위 선택
            </InputLabel>
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
          <button className={classes.Button} onClick={fastMatching}>
            빠른 매칭
          </button>
        </div>
      </div>
    </div>
  );
};

export default FastMatch;
