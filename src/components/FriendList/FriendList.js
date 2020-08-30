import React from 'react';
import PropTypes from 'prop-types';

import FriendItem from './FriendItem';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(friend => (
      <FriendItem {...friend} key={friend.id} />
    ))}
  </ul>
);

FriendList.defaultProps = {
  friend: PropTypes.shape({
    isOnline: false
  })
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object)
}

export default FriendList;