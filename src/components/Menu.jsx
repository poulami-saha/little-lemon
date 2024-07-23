import styles from "./Menu.module.css";
const Menu = ({ name, price, description, imagePath }) => {
  return (
    <article className={styles.container}>
      <img src={imagePath} alt="dish" className={styles.dishPhoto} />
      <div className={styles.header}>
        <h3 className={styles.itemName}>{name}</h3>
        <h3 className={styles.price}>{price}</h3>
      </div>
      <h4 className={styles.description}>{description}</h4>
    </article>
  );
};

export default Menu;
