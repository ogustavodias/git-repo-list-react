import styles from "./styles.module.css";

const RepoList = ({ data }) => {
  console.log(data);

  return (
    <ul className={`container ${styles.RepoList}`}>
      {data?.map((item) => {
        return (
          <li className={styles.listItem} key={item.id}>
            <span className={styles.repoName}>{item.name}</span>
            <a href={item.html_url} className={styles.seeOn} rel="noreferrer" target="_blank">
              See On GITHUB
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default RepoList;
