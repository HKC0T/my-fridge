import { Button, Container } from "react-bootstrap";
import DataTable from "./tableg/DataTable";
import { useNavigate } from "react-router-dom";

export default function GroceryList({ state, setState }) {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between my-3">
          <h1>Grocery List</h1>
          <Button
            variant="outline-dark"
            onClick={() => navigate("/grocery-list/new")}
          >
            + Add item
          </Button>
        </div>
        <DataTable setState={setState} state={state} />
      </Container>
    </>
  );
}
