import Layout from "./components/layout";
import Profile from "./components/profile";
import Filters from "./components/filters";
import RepoList from "./components/repo-list";
import Search from "./components/search";
// import repoData from "./components/repo-data";
import { useEffect, useState } from "react";
import { getUser, getRepos } from "./services/users";
import { useParams } from "react-router-dom";

function App() {
  const params = useParams();
  let username = params.user;

  if (!username) {
    username = "leonidasesteban";
  }

  const [user, setUSer] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No hemos encontrado ningun error ");
        return;
      }
      setUSer(data);
    });

    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No hemos encontrado ningun error ");
        return;
      }
      setRepos(data);
    });
  }, [username]);

  return (
    <Layout>
      <Profile {...user} />
      <Filters />
      <RepoList repoList={repos} />
      <Search />
    </Layout>
  );
}

export default App;
