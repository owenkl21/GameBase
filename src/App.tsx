import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios, { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { DiVim } from 'react-icons/di';

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

  return (
    <>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ul className="list-group d-flex flex-column">
          {users.map((user) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={user.id}
            >
              {user.name}{' '}
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
