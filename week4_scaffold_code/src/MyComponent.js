import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import CustomerUrlConfig from './service_url/CustomerUrlConfig';

function MyComponent() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(CustomerUrlConfig.CUSTOMER_SERVICE_URL);
      const data = await response.json();
      setUsers(data);
    } catch   
 (error) {
      console.error('Error fetching users:', error);   

    }
  };

  const handleCreateUser = async (newUser) => {
    try {
      await fetch(CustomerUrlConfig.CUSTOMER_SERVICE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      // Refetch users after successful creation
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
        <div>
            {JSON.stringify(users)}
        </div>
      <button onClick={() => handleCreateUser({ name: 'New User' })}>
        Create User
      </button>
    </div>
  );
}

export default MyComponent