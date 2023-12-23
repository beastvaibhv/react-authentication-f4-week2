import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const id = JSON.parse(localStorage.getItem('user')).id;

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch user data');
        }
      })
      .then((data) => {
        setUserData(data);
        localStorage.setItem('userData', JSON.stringify(data)); // Save user data to local storage
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {userData ? (
        <div className="user-details">
          <p>ID: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add other user details here */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
