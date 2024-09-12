import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';

import API from '../utils/API';

export default function HomePage() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await API.getUsers();

    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {users.map((user) => (
          <ListItem key={user.id}>
            <Profile user={user} />
            {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
            <Link
              to={`/profile/${user.id}`}
              className="badge bg-primary rounded-pill"
            >
              See More
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
