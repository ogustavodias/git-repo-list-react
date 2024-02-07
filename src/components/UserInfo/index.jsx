import styles from './styles.module.css';

const UserInfo = () => {
  return (
    <div className={styles.UserInfo}> 
      <img src="https://github.com/ogustavodias.png" alt="user avatar" className={styles.avatar}/>
      <span className={styles.username}>ogustavodias</span>
    </div>
  )
}

export default UserInfo;
