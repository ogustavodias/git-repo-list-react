import styles from "./styles.module.css";

const Search = ({ setData, setUser, setLoading, setError }) => {
  const undefined_user = {
    username: "user",
    avatar: "https://via.placeholder.com/170x170",
  };

  const getRepositories = async (event) => {
    event.preventDefault();
    const { value } = event.target[0];

    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.github.com/users/${value}/repos`
      );
      if (response.ok) {
        const json = await response.json();
        setUser({ username: value, avatar: `https://github.com/${value}.png` });
        setData(json);
        return true;
      }

      throw new Error("User not found");
    } catch (error) {
      setError(error.message);
      setUser({ ...undefined_user });
      setData([]);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className={`container ${styles.Search}`}>
      <form onSubmit={getRepositories}>
        <input type="text" placeholder="Username in GITHUB" required />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Search;
