import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function EditItemForm({ state, setState, Data, onHide }) {
  const defaultState = {
    name: Data.name,
    quantity: Data.quantity,
    expiry_date: Data.expiry_date,
    type: Data.type,
  };

  const [editItem, setEditItem] = useState(defaultState);

  const itemTypes = [
    { label: "Vegetable", accessor: "Vegtetable" },
    { label: "Meat", accessor: "Meat" },
    { label: "Fish", accessor: "Fish" },
    { label: "Dairy", accessor: "Dairy" },
    { label: "Fruit", accessor: "Fruit" },
    { label: "Other", accessor: "Other" },
  ];

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
            expiry_date: editItem.expiry_date,
            type: editItem.type,
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
    if (editItem.name === "" || editItem.type === "default")
      return console.log("incorrect");
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
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  name="expiry_date"
                  type="date"
                  value={editItem.expiry_date}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Item type</Form.Label>
                <Form.Control
                  as="select"
                  aria-label="Default select example"
                  defaultValue={editItem.type}
                  onChange={handleChange}
                  name="type"
                >
                  {itemTypes.map(({ label, accessor }) => {
                    return (
                      <option key={label} value={accessor}>
                        {label}
                      </option>
                    );
                  })}
                </Form.Control>
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
