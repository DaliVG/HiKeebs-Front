import styles from "../css/ShopCard.module.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Keycaps } from "../pages/keycaps";

export function ShopCard({ shop }) {
  return (
    <Link to={shop.id}>
    <Card className={styles.shopCard}>
      <Card.Body>
      <Card.Title>{shop.name}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
  );
}