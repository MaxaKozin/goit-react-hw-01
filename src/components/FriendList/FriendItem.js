import React from 'react';

import s from './FriendList.module.css';

const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      {isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendItem;