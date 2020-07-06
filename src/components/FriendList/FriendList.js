import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        {friend.isOnline ? <span className={styles.online}></span> : <span className={styles.offline}></span>}
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  isOnline: false
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