import { SculptsCard } from "./SculptsCard";
import keycaps from "../keycaps.json";
import styles from '../css/SculptsGrid.module.css';

export function SculptsGrid({ide}) {
  const colorways = keycaps.find((keycap) => keycap.sculpts.some((sculpt) => sculpt.id === ide)).sculpts.find((sculpt) => sculpt.id === ide).colorways;
    return (
        <div className={styles.sculptsGrid}>
          {colorways.map(ke=> <SculptsCard key={ke.id} colorway={ke} />) 
          }
        </div>
      );
} 