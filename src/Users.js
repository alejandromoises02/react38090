import React, { useState } from "react";
import { UserList } from "./UserList";

export const Users = () => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  const handlerChange = (e) => {
    setUser(e.target.value);
  };

  const handlerClick = () => {
    setUsers([...users, user]);
  };

  const deleteUser = (userD) => {
    const filtrado = users.filter((user) => {
      return user !== userD;
    });
    setUsers(filtrado);
  };

  return (
    <div>
      <input type="text" onChange={handlerChange} />
      <button onClick={handlerClick}>Agrega a la lista</button>
      <UserList users={users} deleteUser={deleteUser}/>
    </div>
  );
};
