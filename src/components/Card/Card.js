import React from "react";
import { Button, Card } from "react-bootstrap";

const CardSingle = ({ title, tech, site, github }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {tech}
        </Card.Text>
        <Button href={site} variant="primary">Go to Site</Button>
        <Button href={github} variant="success">Github</Button>
      </Card.Body>
    </Card>
  );
};

export default CardSingle;
