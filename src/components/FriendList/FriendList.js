import React from 'react';
import PropTypes from 'prop-types';

import FriendItem from './FriendItem';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(friend => (
      <FriendItem {...friend} />
    ))}
  </ul>
);

FriendList.defaultProps = {
  friend: PropTypes.shape({
    isOnline: false
  })
}

FriendList.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired
  })

}

export default FriendList;