import { Paper, Typography } from "@mui/material";
import UserInfo from "./UserInfo";
const Engagement = ({ data, engagement }) => {
  return (
    <Paper
      style={{
        padding: "2rem",
        marginTop: "2rem",
        background: "#E1306C",
        color: "#ffffff",
      }}
      elevation={0}
    >
      <UserInfo data={data} />
      <Typography align="center" style={{ margin: "1rem auto" }} variant="h5">
        Your Engagement Percentage is :-{" "}
      </Typography>
      <Typography align="center" style={{ fontWeight: 500 }} variant="h4">
        {engagement?.toFixed(2) || 0}%
      </Typography>
    </Paper>
  );
};
export default Engagement;
