import styled from "styled-components";
// import props from "./profile-data";
import Button from "./button";
import Icon from "./icon";

const ProfileStyle = styled.div`
  grid-area: profile;
  /* background-color: yellow; */

  .avatar {
    border-radius: 50%;
    overflow: hidden;

    box-sizing: border-box;
    border: 1px solid var(--grey-1);
    margin-block-end: 1.5rem;
  }

  .name {
    color: var(--white);
    font: var(--headline1);
    margin-block-end: 0.5rem;
  }

  .username {
    font: var(--headline2-ligth);
    color: var(--grey-2);
    margin-block-start: 0.5rem;
    margin-block-end: 1.5rem;
  }

  .info {
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body1-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    column-gap: 0.5rem;
    margin-block: 1.5rem;

    & a {
      border-radius: 0.5rem;
    }
  }
`;

function Profile(props) {
  const {
    name,
    login,
    avatar_url,
    bio,
    followers,
    following,
    location,
    blog,
    twitter_username,
  } = props;

  return (
    <ProfileStyle>
      <Icon />
      <img
        className="avatar"
        src={avatar_url}
        width="278"
        height="278"
        alt="People"
      />
      <p className="name">{name}</p>

      <p className="username">{login}</p>
      <div className="buttons">
        <Button text="Follow" link="#" className="custom" />
        <Button
          text="Sponsor"
          icon={<Icon name="heart" size={24} color="var(--pink)" />}
        />
      </div>
      <p className="bio info"> {bio}</p>
      <p className="follwers info">
        . {followers} <span>followers</span> .{following} <span>following</span>
      </p>
      {/* <p className="stars info ">81</p> */}
      <p className="location info"> {location}</p>
      <a className="info" href={blog} target="_blank" rel="noreferrer">
        . {blog}
      </a>
      <a
        className="info"
        href={`https://twitter.com/${twitter_username}`}
        target="_blank"
        rel="noreferrer"
      >
        @{twitter_username}
      </a>
    </ProfileStyle>
  );
}

export default Profile;
