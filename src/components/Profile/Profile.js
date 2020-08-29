import React from 'react';
import PropTypes from 'prop-types';

import s from './Profile.module.scss';

const Profile = ({ avatar, name, tag, location, stats: { followers, views, likes } }) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img className={s.avatar} src={avatar} alt={name} width="100" />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg"
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}

export default Profile;