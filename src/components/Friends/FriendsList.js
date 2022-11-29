import PropTypes from 'prop-types';
import { FriendsItem } from './FriendItem';
import { FriendsList } from './FriendsList.styled';

export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsItem key={friend.id} friend={friend} />
      ))}
    </FriendsList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})),
};
