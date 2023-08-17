import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewItemForm({ state, setState }) {
  let navigate = useNavigate();
  const defaultState = {
    name: "",
    quantity: 0,
    expiry_date: "-",
    type: "default",
  };
  const [newItem, setNewItem] = useState(defaultState);

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
          expiry_date: item.expiry_date,
          type: item.type,
        },
      ];
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
    console.log(newItem);
    if (newItem.name === "" || newItem.type === "default")
      return console.log("incorrect");
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
        <h1 className="fw-bold">Add new item</h1>
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
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  name="expiry_date"
                  type="date"
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
                  defaultValue={newItem.type}
                  onChange={handleChange}
                  name="type"
                  required
                >
                  <option value="default" disabled hidden>
                    Select item type
                  </option>
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
