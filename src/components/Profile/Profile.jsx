import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

export const Profile = props => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={props.avatar} alt={props.username} className={css.avatar} />
        <p className={css.username}>{props.username}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{props.stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{props.stats.views}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
