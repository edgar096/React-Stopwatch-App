import styles from './Card.module.css';

const Card = ({ children }) => {
  return <div className={styles.buttons}>{children}</div>;
};

export default Card;
