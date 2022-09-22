import React from "react";

export const UserList = ({users, deleteUser}) => {

  return (
    <div>
      {users.map((user, i) => {
        return (
          <div key={i}>
            <h2>{user}</h2>
            <button onClick={()=>deleteUser(user)}>eliminar usuario</button>
          </div>
        )
      })}
    </div>
  );
};
