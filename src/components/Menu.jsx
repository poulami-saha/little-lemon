import styles from "./Menu.module.css";
const Menu = ({ name, price, description, imagePath }) => {
  return (
    <article className={styles.container}>
      <img src={imagePath} alt="dish" className={styles.dishPhoto} />
      <div className={styles.header}>
        <p className={styles.itemName}>{name}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.order}>Order a delivery</p>
    </article>
  );
};

export default Menu;
