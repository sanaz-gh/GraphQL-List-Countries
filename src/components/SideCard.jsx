import styles from "./SideCard.module.css";

const SideCard = ({ liked }) => {
    return (
      <div className={styles.card}>
        <h2>: {liked.language.name}</h2>
        <h2>: {liked.language.code}</h2>
      </div>
    );
  };
  
  export default SideCard;