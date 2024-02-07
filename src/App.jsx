import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

function App() {
  const [data, setData] = useState([]);
/*   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); */

  const getRepositories = async () => {
    const response = await fetch(
      "https://api.github.com/users/ogustavodias/repos"
    );
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <>
      <Search />
      <UserInfo data={data} />
    </>
  );
}

export default App;
