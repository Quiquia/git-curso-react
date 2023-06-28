import styled from "styled-components";
import Language from "./language";
import Icon from "./icon";

const RepoItemStyled = styled.div`
  padding-block: 1rem;
  border-block-end: 1px solid var(--grey-1);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  &:last-child {
    border-block-end: none;
  }

  .title {
    display: flex;
    column-gap: 1rem;
    margin: 0;

    a {
      color: var(--primary);
      text-decoration: none;
    }
  }

  .public {
    border: 1px solid var(--grey-1);
    border-radius: 0.5rem;
    padding-inline: 0.5rem;
    padding-block: 0.125rem;
    font: var(--caption-regular);
    height: 22px;
  }

  .description {
    font: var(--body2-regular);
    margin: 0;
  }

  .topicList {
    display: flex;
    gap: 0.25rem;
  }

  .topicItem {
    color: var(--primary);
    font: var(--caption-medium);
    background: var(--buttonTopic);
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    border-radius: 2rem;
  }

  .details {
    display: flex;
    gap: 1rem;
    color: var(--grey-1);
    font: var(--caption-regular);
  }

  .details-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    & span::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 414px) {
    padding-block: 0;
    padding-block-end: 2rem;

    .topicList {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

function RepoItem(props) {
  const updatedAt = new Date(props.updated_at);
  const today = new Date();
  const diffMilliseconds = updatedAt - today;
  const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));

  const timeAgo = new Intl.RelativeTimeFormat("es").format(diffDays, "days");

  return (
    <RepoItemStyled>
      <h3 className="title">
        <a href={props.html_url} target="_blanck">
          {props.name}
        </a>
        {!props.private ? <span className="public">Public</span> : null}
      </h3>
      {props.description ? (
        <p className="description">{props.description}</p>
      ) : null}

      {props.topics.length ? (
        <div className="topicList">
          {props.topics.map((item) => (
            <span className="topicItem" key={item}>
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <div className="details">
        {props.language ? <Language name={props.language} /> : null}
        <span className="details-item">
          <Icon name="star" />
          <span>{props.stargazers_count}</span>
        </span>
        <span className="details-item">
          <Icon name="branch" />
          <span>{props.forks_count}</span>
        </span>
        <span className="details-item">
          <span>{timeAgo}</span>
        </span>
      </div>
    </RepoItemStyled>
  );
}

export default RepoItem;
