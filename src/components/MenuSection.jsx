import styles from "./MenuSection.module.css";
import { items } from "../model/items";
import Menu from "./Menu";

const MenuSection = () => {
  return (
    <section className={styles.container}>
      <article className={styles.weekSpecial}>
        <h2 className={styles.location}>This week's special</h2>
        <button className={styles.book}>Online Menu</button>
      </article>
      <article className={styles.menuItems}>
        {items.map(({ name, price, description, imagePath }) => {
          return (
            <Menu
              key={name}
              name={name}
              price={price}
              description={description}
              imagePath={imagePath}
            />
          );
        })}
      </article>
    </section>
  );
};
export default MenuSection;
