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

  .bio {
    font: var(--body1-regular);
  }
  .info {
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-regular);
    text-transform: capitalize;
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

  @media screen and (max-width: 414px) {
    .profile {
      display: flex;
      gap: 1rem;
      align-items: center;

      img {
        margin: 0;
        width: 80px;
        height: 80px;
      }
    }

    .detailProfile {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      p {
        margin: 0;
      }
    }

    .buttonProfile {
      display: flex;
      flex-direction: column;

      .buttons {
        order: 0;
        margin: 0;
      }

      .infoProfile {
        order: -1;
        margin-block: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p,
        a {
          margin: 0;
        }
      }
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
      <div className="profile">
        <img
          className="avatar"
          src={avatar_url}
          width="278"
          height="278"
          alt="People"
        />
        <div className="detailProfile">
          <p className="name">{name}</p>
          <p className="username">{login}</p>
        </div>
      </div>

      <div className="buttonProfile">
        <div className="buttons">
          <Button text="Follow" link="#" className="custom" />
          <Button
            text="Sponsor"
            icon={<Icon name="heart" size={24} color="var(--pink)" />}
          />
        </div>

        <div className="infoProfile">
          <p className="bio info"> {bio}</p>
          <p className="follwers info">
            <Icon name="user" size={24} color="var(--grey-1)" /> {followers}{" "}
            <span>followers</span> .{following} <span>following</span>
          </p>
          <p className="location info">
            <Icon name="location" size={24} color="var(--grey-1)" />
            {location}
          </p>
          <a className="info" href={blog} target="_blank" rel="noreferrer">
            <Icon name="link" size={24} color="var(--grey-1)" /> {blog}
          </a>
          <a
            className="info"
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="twitter" size={24} color="var(--grey-1)" /> @
            {twitter_username}
          </a>
        </div>
      </div>
    </ProfileStyle>
  );
}

export default Profile;
