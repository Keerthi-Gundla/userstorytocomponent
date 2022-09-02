import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Trade from "../molecules/Trade";

const Wallet = () => {
  const [tradeList, setTradeList] = useState([]);

  useEffect(() => {
    axios.get("tradeListUrl").then((res) => {
      setTradeList(res.data);
    });
  });

  return (
    <Grid>
      {tradeList &&
        tradeList.map((item) => {
          return (
            <Grid>
              <Trade item={item} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Wallet;
