import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
      {user?.loading && <div>Loading...</div>}
      {!user?.loading && user?.error && <div>Error: {user?.error}</div>}
      {!user?.loading && user?.users.length > 0 && (
        <ul>
          {user?.users.map((user) => (
            <li key={user?.id}>{user?.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
