import React, { useState } from 'react';
import usersData from '../users.json';

import './FriendsList.css';

const FriendsList = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const friendItems = [];
  for (let i = 0; i < usersData.length; i++) {
    const friend = usersData[i];
    friendItems.push(<li key={friend.id} className="friend">{friend.name}</li>);
  }

  return (
    <div className={`friends-list-container ${isListOpen ? 'open' : ''}`}>
      <div className="friends-list-toggle" onClick={toggleList}>
        Amigos
      </div>
      <ul className="friends-list">
        {friendItems}
      </ul>
    </div>
  );
};

export default FriendsList;