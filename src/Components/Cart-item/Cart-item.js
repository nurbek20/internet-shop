import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CartItem = (props) => {
  const {brand,description,images,price,title}=props
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
      className="img"
        variant="top"
        src={images[0]}
      />
      <Card.Body>
        <div className="title d-flex gap-2 justify-content-between">
          <Card.Title>{title}</Card.Title> <Card.Title>{brand}</Card.Title>
        </div>
        <div className="description">
          <Card.Text>
            {description}
          </Card.Text>
        </div>
        <div className="d-flex gap-2 justify-content-between">
          <Card.Title>{price} $</Card.Title>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
