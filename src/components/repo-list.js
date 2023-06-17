import styled from "styled-components";
import RepoItem from "./repo-item";

const RepoListStyle = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* background-color: pink; */
`;

function RepoList({ repoList }) {
  return (
    <RepoListStyle>
      {repoList.map((item) => {
        return <RepoItem {...item} key={item.id} />;
      })}
    </RepoListStyle>
  );
}

export default RepoList;
