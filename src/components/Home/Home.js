import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="heading-home">
        <h1>HARRY J. STEAD</h1>
      </div>
      <div className="heading-home">
          <h3>Full-Stack Developer</h3>
          <Button href="./portfolio" variant="success">Portfolio</Button>
      </div>
    </div>
  );
};

export default Home;
