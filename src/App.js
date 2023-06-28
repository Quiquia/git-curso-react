import Layout from "./components/layout";
import Profile from "./components/profile";
import Filters from "./components/filters";
import RepoList from "./components/repo-list";
import Search from "./components/search";
// import repoData from "./components/repo-data";
import { useEffect, useState } from "react";
import { getUser, getRepos } from "./services/users";
import { useParams } from "react-router-dom";
import Modal from "./modal";

function App() {
  const params = useParams();
  let username = params.user;

  if (!username) {
    username = "leonidasesteban";
  }

  const [user, setUSer] = useState({});
  const [repos, setRepos] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});

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
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters
        setSearch={setSearch}
        repoListCount={repos.length}
        setFilters={setFilters}
        filters={filters}
      />
      <RepoList search={search} repoList={repos} filters={filters} />
      <Search setModal={setModal} />
    </Layout>
  );
}

export default App;
