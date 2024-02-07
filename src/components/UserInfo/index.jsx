import RepoList from "./RepoList";
import styles from "./styles.module.css";

const UserInfo = ({data}) => {
  return (
    <section>
      <div className={styles.UserInfo}>
        <img src="https://github.com/ogustavodias.png" alt="user avatar" className={styles.avatar}/>
        <span className={styles.username}>ogustavodias</span>
      </div>
      <RepoList data={data}/>
    </section>
  );
};

export default UserInfo;
