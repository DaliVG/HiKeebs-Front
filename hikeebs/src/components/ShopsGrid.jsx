import { ShopCard } from "./ShopsCard";
import keycaps from "../keycaps.json";
import styles from '../css/ShopGrid.module.css';
export function ShopsGrid() {
    return (
        <div className={styles.shopsGrid}>
          {keycaps.map((keycap) => keycap.sculpts.map(sculpt=> <ShopCard key={sculpt.id} keycap={sculpt} />)
          )}
        </div>
      );
}