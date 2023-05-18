import styles from "../css/SculptsCard.module.css";
import Card from 'react-bootstrap/Card';

export function SculptsCard({ colorway }) {
  return (
    <Card className={styles.sculptsCard}>
      <Card.Img src={colorway.Img}/>
      <Card.Body>
      <Card.Title>{colorway.name}</Card.Title>
      </Card.Body>
    </Card>
    );
}