import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../api/usersApi";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { User } from "../../slices/usersSlice";

function UserItem(): JSX.Element {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading users</div>;
  }

  return (
    <>
      {users.map((user: User) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>Name: {user.name}</Link>
        </li>
      ))}
    </>
  );
}

export default UserItem;
