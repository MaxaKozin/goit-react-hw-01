import React from 'react';
import user from './json/user.json';
import statistics from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';

function App() {
  return (
    <>
      <Profile avatar={user.avatar} name={user.name} tag={user.tag} location={user.location} stats={user.stats} />
      <Statistics title='Upload stats' statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
