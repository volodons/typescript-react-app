import Navigation from "../layout/Navigation";
import List from "../common/List";
import UserItem from "./UserItem";

function UsersList(): JSX.Element {
  return (
    <>
      <Navigation />
      <h1>Users List</h1>
      <List>
        <UserItem />
      </List>
    </>
  );
}

export default UsersList;
