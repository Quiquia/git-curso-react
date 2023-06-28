import styled from "styled-components";
import RepoItem from "./repo-item";
import StateEmpty from "./state-empty";

const RepoListStyle = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function RepoList({ repoList, search, filters }) {
  let list = repoList;

  // console.log(list);

  if (search !== "") {
    list = list.filter((item) => {
      return item.name.search(search) >= 0;
    });

    if (list.length === 0) {
      return <StateEmpty />;
    }
  }

  if (filters.language) {
    list = list.filter((item) => {
      if (item.language) {
        return item.language.toLowerCase() === filters.language;
      }
      return false;
    });

    if (list.length === 0) {
      return <StateEmpty />;
    }
  }

  if (filters.branch) {
    list = list.filter((item) => {
      return item.forks > 0;
    });

    if (list.length === 0) {
      return <StateEmpty />;
    }
  }

  if (filters.order) {
    list = list.filter((item) => {
      return item.stargazers_count > 0;
    });

    list.sort((a, b) => b.stargazers_count - a.stargazers_count);

    if (list.length === 0) {
      return <StateEmpty />;
    }
  }

  return (
    <RepoListStyle>
      {list.map((item) => {
        return <RepoItem {...item} key={item.id} />;
      })}
    </RepoListStyle>
  );
}

export default RepoList;
