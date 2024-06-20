import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios, { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { DiVim } from 'react-icons/di';
import { original } from 'immer';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const handleDelete = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
    const originalUsers = users;
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const data = {
    id: 11,
    name: 'Owen Kleinhans',
  };
  const handleAdd = () => {
    const originalUsers = users;
    axios
      .post('https://jsonplaceholder.typicode.com/users', data)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const handleUpdate = (user: User) => {
    const updatedUsers = { ...user, name: 'Klein Owen' };
    console.log('updating');
    axios
      .post(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        updatedUsers
      )
      .then((res) => {
        setUsers([res.data, ...users]);
      });
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}{' '}
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <button onClick={handleAdd} className="btn btn-primary">
            Add User
          </button>
          <ul className="list-group d-flex flex-column">
            {users.map((user) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={user.id}
              >
                {user.name}{' '}
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleUpdate(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(user)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
