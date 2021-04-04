import React from "react";
import { Button, Card } from "react-bootstrap";

const CardSingle = ({ title, tech, site }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="#" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {tech}
        </Card.Text>
        <Button href={site} variant="primary">Go to Site</Button>
      </Card.Body>
    </Card>
  );
};

export default CardSingle;
