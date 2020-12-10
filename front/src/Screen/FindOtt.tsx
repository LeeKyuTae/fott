import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import SearchIcon from "../resources/icons/donation_search_btn.png";
import InputBase from "@material-ui/core/InputBase";
import axios from "axios";
import apiPath from "../apiPath";
import { Ott } from "../models/ott";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface Props {
  setData(data: number): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
  })
);

const FindOtt: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [ottList, setOttList] = useState<Array<Ott>>([]);
  const [select, setSelect] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const input = await axios.get(apiPath.getAllOttList());
      const result = input.data;
      setOttList(result);
      setSelect(result ? result[0].ottId : -1);
    };
    fetchData();
  }, []);

  useEffect(() => {
    props.setData(select);
  }, [select]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelect(event.target.value as number);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">OTT 서비스 선택</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          onChange={handleChange}
        >
          {ottList.map((data, idx) => {
            return (
              <MenuItem value={data.ottId} key={idx}>
                {`${data.ottName} / ${data.price} 원 / 최대 인원 : ${data.maxUser}`}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default FindOtt;
