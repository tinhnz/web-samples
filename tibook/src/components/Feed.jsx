import { Box } from "@mui/material";
import Post from "./Post";
import CreatePost from "./CreatePost";

const Feed = () => (
  <>
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
    <CreatePost />
  </>
);

export default Feed;
