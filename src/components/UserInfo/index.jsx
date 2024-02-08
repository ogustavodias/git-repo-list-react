import RepoList from "./RepoList";
import styles from "./styles.module.css";

const UserInfo = ({data, user, loading, error}) => {
  const {username, avatar} = user;
  
  return (
    <section>
      <div className={styles.UserInfo}>
        <img src={avatar}alt="user avatar" className={styles.avatar}/>
        <span className={styles.username}>{username}</span>
      </div>
      <RepoList data={data} loading={loading} error={error}/>
    </section>
  );
};

export default UserInfo;
