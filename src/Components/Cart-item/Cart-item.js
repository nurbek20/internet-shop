import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CartItem = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
      className="img"
        variant="top"
        src="https://object.pscloud.io/cms/cms/Photo/img_0_77_1457_0.jpg"
      />
      <Card.Body>
        <div className="title d-flex gap-2 justify-content-between">
          <Card.Title>Iphone X</Card.Title> <Card.Title>Apple</Card.Title>
        </div>
        <div className="description">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </div>
        <div className="d-flex gap-2 justify-content-between">
          <Card.Title>$899</Card.Title>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
