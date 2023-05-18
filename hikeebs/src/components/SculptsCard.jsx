import styles from "../css/SculptsCard.module.css";
import Card from 'react-bootstrap/Card';

export function SculptsCard({ colorway }) {
  return (
    <Card className={styles.sculptsCard}>
      <Card.Img src={colorway.img}
      width={200}
      height={200}/>
      <Card.Body>
      <Card.Title>{colorway.name}</Card.Title>
      </Card.Body>
    </Card>
    );
}