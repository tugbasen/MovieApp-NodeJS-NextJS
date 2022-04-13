import classes from './CastCard.module.css';
import { Card } from "react-bootstrap";

function CastCard({ image, casts }) {
  return (
    <Card className="w-25 card shadow mb-5 bg-body rounded">
      <Card.Img src={`https://image.tmdb.org/t/p/w200/${image}`} />
      <Card.Body style={{ height: "15vh" }}>
        <Card.Title>{casts.name}</Card.Title>
        <Card.Text style={{ fontSize: 14 }}>{casts.character}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CastCard;