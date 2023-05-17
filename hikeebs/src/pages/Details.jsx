import styles from '../css/KeycapDetails.module.css';
import { useParams } from "react-router";
import keycaps from "../keycaps.json";

export function KeycapDetails() {
    const { sculptId } = useParams();
    const filteredKeycaps = keycaps.filter(keycap => keycap.id === sculptId);
  return (
    
    <div className={styles.detailsContainer}>
            {filteredKeycaps.map((sculpt) => sculpt.id.map((key)=> 
            <div>
                <img
                 className={`${styles.col} ${styles.keycapImage}`}
                 src={key.img}
                 alt={key.name}
                />
                <div className={`${styles.col} ${styles.keycapDetails}`}>
                    <p className={styles.firstItem}>
                    <strong>Name:</strong> {key.name}
                    </p>
                    <p>
                    <strong>RelaseDate:</strong>{" "}
                    {key.colorways.map((colorways) => colorways.releaseDate)}
                    </p>
                </div> 
            </div>))}  
    </div>
  );
}