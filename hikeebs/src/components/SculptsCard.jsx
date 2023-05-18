import styles from "../css/SculptsCard.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export function SculptsCard({ colorway }) {
  return (
    <Card className={styles.sculptsCard}>
      <Card.Img src={colorway.img}
      width={200}
      height={200}/>
      <Card.Body>
      <Card.Title>{colorway.name}</Card.Title>
      <Card.Text>15,00€</Card.Text>
      <Button variant="outline-secondary">Añadir al carrito</Button>{' '}
      </Card.Body>
    </Card>
    );
}