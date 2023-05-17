import styles from "../css/ShopCard.module.css";

export function ShopCard({ keycap }) {
  return (
    <div className={styles.shopCard}>
      {console.log(keycap.img)}
      <img
        width={100}
        height={100}
        className={styles.shopImage}
        src={keycap.img}
        alt={keycap.name}
      />
      <div>{keycap.name}</div>
    </div>
  );
}