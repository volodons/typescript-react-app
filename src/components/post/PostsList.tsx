import Navigation from "../layout/Navigation";
import List from "../common/List";
import PostItem from "./PostItem";

function PostsList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>Posts List</h1>
      <List>
        <PostItem />
      </List>
    </>
  );
}

export default PostsList;
