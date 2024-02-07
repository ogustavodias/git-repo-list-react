import styles from "./styles.module.css";

const Search = () => {
  return (
    <header className={`container ${styles.Search}`}>
      <form>
        <input type="text" placeholder="Username in GITHUB" required />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Search;
