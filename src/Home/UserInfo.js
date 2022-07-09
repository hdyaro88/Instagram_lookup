import { Avatar, Typography, Divider } from "@mui/material";
import { formatNumber } from "../Helper Files/formatNumber";
const TextBlock = ({ label, value }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1rem auto 1rem 1rem",
        }}
      >
        <Typography style={{ width: "30%", fontWeight: "600", fontSize: "18px", lineHeight: "21px" }} align="left">
          {label}
        </Typography>
        <span style={{ flexGrow: "1" }}>-</span>
        <Typography style={{ width: "60%" }}>{value}</Typography>
      </div>
      <Divider style={{ borderColor: "#ffffff" }} orientation="horizontal" />
    </>
  );
};
const UserInfo = ({ data }) => {
  return (
    <div style={{ margin: "0.5rem auto", textAlign: "center" }}>
      <Avatar style={{ margin: "auto", width: "150px", height: "150px" }} src={data?.profile_pic_url_hd} />
      <TextBlock label={"Username"} value={data?.username || "@username"} />
      <TextBlock label={"Full Name"} value={data?.full_name || "full_name"} />
      <TextBlock label={"Followers"} value={formatNumber(data?.follower_count || "0M")} />
      <TextBlock label={"Likes/Post"} value={formatNumber(data?.likes_per_post || "0K")} />
      <TextBlock label={"Comments/Post"} value={formatNumber(data?.comments_per_post || "0K")} />
    </div>
  );
};
export default UserInfo;
