import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewItemForm({ state, setState }) {
  let navigate = useNavigate();
  const defaultState = {
    name: "",
    quantity: 0,
  };
  const [newItem, setNewItem] = useState(defaultState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    setNewItem((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(`change ${defaultState.quantity}`);
  };

  function addItem(item) {
    console.log(`add ${JSON.stringify(item)}`);
    setState((currentItems) => {
      console.log(currentItems);
      return [
        ...currentItems,
        {
          id: crypto.randomUUID(),
          name: item.name,
          quantity: item.quantity,
        },
      ];
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
    console.log(newItem);
    if (newItem.name === "") return console.log("incorrect");
    addItem(newItem);
    exit();
  }

  function exit() {
    return navigate(-1);
  }

  console.log(state);
  return (
    <>
      <Container className="my-3 ">
        <h1 className="fw-bold">Add new grocery</h1>
        <Form onSubmit={handleSubmit} className="my-3">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter item name"
                  value={newItem.name}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  name="quantity"
                  type="number"
                  min="1"
                  value={newItem.quantity}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end">
            <Button className="ms-3" variant="dark" onClick={exit}>
              Cancel
            </Button>
            <Button type="submit" className="ms-3" variant="dark">
              Add
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
