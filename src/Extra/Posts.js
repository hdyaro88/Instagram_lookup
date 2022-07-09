/** @jsxRuntime classic */
/** @jsx jsx */
import { Avatar } from "@mui/material";
import { css, jsx } from "@emotion/react";
import "./posts.css";
const classes = {
  Avatar: css({
    width: "150px",
    height: "150px",
    margin: "0.5rem auto",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.5s",
    },
  }),
};
const Posts = ({ feed }) => {
  const posts = feed || Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <div className="cards" style={{ marginTop: "2rem" }}>
      {posts?.map((el, id) => {
        return (
          <Avatar
            css={[classes.Avatar]}
            style={{
              border: "0.1px solid lightgray",
            }}
            src={el.url}
            key={id}
            className="card"
            variant="square"
          />
        );
      })}
    </div>
  );
};
export default Posts;
