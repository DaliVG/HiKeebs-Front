import styles from "../css/ShopCard.module.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export function ShopCard({ sculpts }) {
  return (
    <Link to={"/keycaps/" + sculpts.id}>
    <Card className={styles.shopCard}>
      <Card.Body>
      <Card.Title>{sculpts.name}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
  );
}