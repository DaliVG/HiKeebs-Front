import { ShopCard } from "./ShopsCard";
import keycaps from "../keycaps.json";
import styles from '../css/ShopGrid.module.css';
export function ShopsGrid() {
    return (
        <div className={styles.shopsGrid}>
          {keycaps.map((keycap) => keycap.sculpts.map(sculpt=> sculpt.colorways.map(colorway=>  <ShopCard key={colorway.id} keycap={colorway} />)
          ))}
        </div>
      );
}