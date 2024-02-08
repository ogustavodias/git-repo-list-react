import { useState } from "react";

import "./App.css";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

function App() {
  const [user, setUser] = useState({username: "user", avatar: "https://via.placeholder.com/170x170"});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  return (
    <>
      <Search setData={setData} setUser={setUser} setLoading={setLoading} setError={setError}/>
      <UserInfo data={data} user={user} loading={loading} error={error}/>
    </>
  );
}

export default App;
