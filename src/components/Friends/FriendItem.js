import PropTypes from 'prop-types';

import { FriendItem, IsOnlineStatus } from './FriendsItem.styled';

export const FriendsItem = ({ friend }) => {
  return (
    <FriendItem key={friend.id}>
      <IsOnlineStatus isOnline={friend.isOnline}></IsOnlineStatus>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </FriendItem>
  );
};

FriendsItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
