import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function EditItemForm({ state, setState, Data, onHide }) {
  const defaultState = {
    name: Data.name,
    quantity: Data.quantity,
  };

  const [editItem, setEditItem] = useState(defaultState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    setEditItem((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(`change ${defaultState.quantity}`);
  };

  function saveItem(editItem) {
    console.log(`add ${JSON.stringify(editItem)}`);
    setState((currentItems) => {
      console.log(currentItems);
      return currentItems.map((item) => {
        if (item.id === Data.id) {
          console.log("same id");
          return {
            ...item,
            name: editItem.name,
            quantity: editItem.quantity,
          };
        }
        return item;
      });
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
    console.log(editItem);
    if (editItem.name === "") return console.log("incorrect");
    saveItem(editItem);
  }
  // console.log(itemList);
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} className="mb-3">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={editItem.name}
                  onChange={handleChange}
                  autoComplete="off"
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
                  value={editItem.quantity}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-end mt-3">
            <Button className="ms-3" variant="dark" onClick={onHide}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="ms-3"
              variant="dark"
              onClick={onHide}
            >
              Save
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
