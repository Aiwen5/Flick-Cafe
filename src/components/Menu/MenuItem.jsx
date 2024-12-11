import styles from "./MenuItem.module.css";

const MenuItem = ({ item, category, buttonHandler }) => {
  const { title, price, image, id } = item;
  return (
    <div className={styles.menuItem}>
      <div className={styles.top}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.text}>
          <p>{title}</p>
        </div>
        <div className={styles.btnRow}>
          <p>${(Math.round(price * 100) / 100).toFixed(2)}</p>
          <button onClick={() => buttonHandler(id, price, title, image)}>
            <img src="/images/plus-icon.svg" alt="Add" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
