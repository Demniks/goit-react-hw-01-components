import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          {/* <span className={css.status}></span> */}
          <span className={isOnline ? css.statusOn : css.statusOff}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
