import styles from "./Main.module.css";
import restaurantFood from "../assets/restauranfood.jpg";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

const items = [
  {
    imagePath: greekSalad,
    name: "GreekSalad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce",
  },
  {
    imagePath: bruchetta,
    name: "Bruchetta",
    price: "$5.99",
    description: "The famous greek salad of crispy lettuce",
  },
  {
    imagePath: lemonDessert,
    name: "Lemon Dessert",
    price: "$5.00",
    description: "The famous greek salad of crispy lettuce",
  },
];
const Main = () => {
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate("/booking");
  };
  return (
    <main>
      <section className={styles.booking}>
        <sidebar>
          <p className={styles.title}>Little Lemon</p>
          <p className={styles.location}>Chicago</p>
          <p className={styles.description}>
            We are a family owned mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <button className={styles.reserve} onClick={navigateToBooking}>
            Reserve a Table
          </button>
        </sidebar>
        <img src={restaurantFood} alt="" className={styles.foodImage} />
      </section>
      <section className={styles.weekSpecial}>
        <p className={styles.location}>This week's special</p>
        <button className={styles.reserve}>Online Menu</button>
      </section>
      <section className={styles.menuItems}>
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
      </section>
    </main>
  );
};

export default Main;
