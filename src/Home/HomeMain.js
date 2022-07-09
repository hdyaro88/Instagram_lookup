import { TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useUtility } from "../Context";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { fetchData } from "./FetchData";
import Engagement from "./Engagement";
const HomeMain = () => {
  const [query, setQuery] = useState("");
  const { loadingHandler } = useUtility();
  const [data, setData] = useState({});

  const queryHandler = async (e) => {
    console.log(query);
    try {
      const res = await fetchData(query, loadingHandler);
      if (res) {
        setData(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "space-around",
        flexDirection: "column",
        minHeight: "500px",
        maxWidth: "500px",
        margin: "auto",
        padding: "2rem",
      }}
    >
      <TextField
        style={{ margin: "auto", maxWidth: "400px" }}
        value={query}
        InputProps={{
          startAdornment: <h3>@</h3>,
          endAdornment: (
            <Button
              type="submit"
              style={{ background: "#F50057", color: "#ffffff" }}
              onClick={queryHandler}
              variant="contained"
            >
              Submit
            </Button>
          ),
        }}
        placeholder="Type the username"
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      {data?.is_private && (
        <Alert style={{ margin: "1rem auto", textAlign: "center" }} severity="warning">
          This is a private account , please enter a public account ! You can see only limited details for this account.
        </Alert>
      )}
      <Engagement data={data} engagement={data?.engagement} />
    </div>
  );
};

export default HomeMain;
