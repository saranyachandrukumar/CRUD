import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const YourComponent = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://65952c2b04335332df821d44.mockapi.io/api/v1/users');
      console.log('API Response:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <table className="table table-info">
          <thead>
            <tr className="table-success">
              <th className='text-center'>ID</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Date</th>
              <th className='text-center'>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td className='text-center'>{user.id}</td>
                <td className='text-center'>{user.name}</td>
                <td className='text-center'>{user.date}</td>
                <td className='text-center'>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default YourComponent;


