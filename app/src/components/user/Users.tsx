import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await axios.get("http://localhost:3001/api/users");
    return users;
  };
  useEffect(() => {
    fetchUsers().then((resp) => {
      return setUsers(resp.data);
    });
  }, []);
  return (
    <div className="w-50 mx-auto mt-5 text-start border p-4">
      <ListGroup>
        {users?.map((user) => {
          return (
            <ListGroup.Item key={user.id}> {user.fullname} </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};
