import PropTypes from 'prop-types';
import {
  Description,
  UserName,
  UserDscr,
  UserList,
  UserItem,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <section>
      <Description>
        <img src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserDscr>@{tag}</UserDscr>
        <UserDscr>{location}</UserDscr>
      </Description>

      <UserList>
        <UserItem>
          <span>Followers</span>
          <Quantity>{followers}</Quantity>
        </UserItem>
        <UserItem>
          <span>Views</span>
          <Quantity>{views}</Quantity>
        </UserItem>
        <UserItem>
          <span>Likes</span>
          <Quantity>{likes}</Quantity>
        </UserItem>
      </UserList>
    </section>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
